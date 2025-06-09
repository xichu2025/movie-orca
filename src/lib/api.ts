import { get } from "@/lib/request";

// 使用超过 30 种过滤器和排序选项查找电影
export const discover_movie = (data: any) => {
  try {
    // 确保 data 是一个对象
    if (typeof data !== "object" || data === null) {
      throw new Error("参数 data 必须是一个对象");
    }
    return get("/api/discover-movie", data);
  } catch (error) {
    console.error("discover_movie 参数错误:", error, data);
    throw error;
  }
};

// 获取电影官方类型列表
export const genre_movie_list = (data: any) => {
  return get("/api/genre-movie-list", data);
};

// 通过 ID 获取电影的顶级详细信息
export const movie_details = (data: any) => {
  return get("/api/movie", data);
};
