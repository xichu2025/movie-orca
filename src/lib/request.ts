// 请求拦截器
const interceptRequest = (url: string, options: any) => {
  // 自动添加baseURL
  // const fullUrl = url.startsWith("http")
  //   ? url
  //   : `${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`;

  const isServer = typeof window === "undefined";
  const fullUrl = isServer
    ? `https://movie-orca.xichufuture.workers.dev${url}`
    : url.startsWith("http")
    ? url
    : `${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`;

  console.log("请求的完整URL:", fullUrl);

  // 添加默认请求头
  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  // 示例：添加认证token（从cookie或localStorage获取）
  // const token = localStorage.getItem("auth_token");
  // if (token) {
  //   headers.Authorization = `Bearer ${token}`;
  // }

  return {
    url: fullUrl,
    options: {
      ...options,
      headers,
    },
  };
};

// 响应拦截器
const interceptResponse = async (response: Response) => {
  const contentType = response.headers.get("content-type");

  // 解析响应数据
  let data: any = null;
  if (contentType?.includes("application/json")) {
    data = await response.json();
  } else if (contentType?.includes("text/")) {
    data = await response.text();
  } else {
    data = await response.blob();
  }

  // 处理成功响应（根据后端约定）
  if (response.ok) {
    // 示例：假设后端返回格式为 { code: 200, data: ..., message: '成功' }
    return data;
  }

  // 处理错误响应
  const error: any = new Error(data?.message || response.statusText);
  error.status = response.status;
  error.data = data;
  throw error;
};

// 封装fetch请求
const request = async (url: string, options = {}) => {
  try {
    // 请求拦截
    const { url: interceptedUrl, options: interceptedOptions } =
      interceptRequest(url, options);

    console.log("请求拦截后的URL:", interceptedUrl);
    console.log("请求拦截后的选项:", interceptedOptions);
    // 发送请求
    const response = await fetch(interceptedUrl, interceptedOptions);

    // 响应拦截
    return await interceptResponse(response);
  } catch (error: any) {
    // 统一错误处理
    console.error("API请求错误:", error);

    // // 示例：根据错误状态码做不同处理
    // if (error.status === 401) {
    //   // 未认证，跳转到登录页
    //   if (typeof window !== "undefined") {
    //     window.location.href = "/login";
    //   }
    // }

    throw error;
  }
};

// 封装常用HTTP方法
export const get = (url: string, params = {}, options = {}) => {
  // 处理查询参数
  const queryString = new URLSearchParams(params).toString();
  const fullUrl = queryString ? `${url}?${queryString}` : url;

  return request(fullUrl, {
    ...options,
    method: "GET",
  });
};

export const post = (url: string, data = {}, options = {}) => {
  return request(url, {
    ...options,
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const put = (url: string, data = {}, options = {}) => {
  return request(url, {
    ...options,
    method: "PUT",
    body: JSON.stringify(data),
  });
};

export const del = (url: string, options = {}) => {
  return request(url, {
    ...options,
    method: "DELETE",
  });
};
