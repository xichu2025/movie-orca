import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

const CACHE_KEY_PREFIX = "items_page_"; // 分页缓存前缀
const CACHE_TTL = 60 * 60 * 24; // 缓存24小时（单位：秒）

// 支持 GET 查询参数
export async function GET(request: Request) {
  try {
    // 1. 从请求中获取分页参数
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page") || "1");
    const pageSize = parseInt(url.searchParams.get("pageSize") || "20");

    // 2. 生成对应分页的缓存键
    const cacheKey = `${CACHE_KEY_PREFIX}${page}_size_${pageSize}`;

    // 3. 检查 Redis 缓存
    const cachedData = await redis.get(cacheKey);
    // console.log("缓存键:", cacheKey);
    // console.log("缓存数据:", cachedData);

    // 4. 缓存命中，直接返回 Redis 数据
    if (cachedData) {
      // console.log(`使用分页缓存: ${cacheKey}`);
      return new Response(JSON.stringify(cachedData), {
        headers: { "Content-Type": "application/json" },
      });
    }

    // 5. 缓存未命中，调用外部 API
    // console.log(`缓存未命中，请求分页数据: ${cacheKey}`);
    const apiUrl = `${process.env.TMDB_API_BASE_URL}/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`API 请求失败: ${response.status}`);
    }

    // 6. 将新数据存入 Redis 缓存
    const freshData = await response.text();
    await redis.setex(cacheKey, CACHE_TTL, freshData);

    return new Response(freshData, {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("处理请求时出错:", error);
    return new Response(`Error: ${error.message}`, { status: 500 });
  }
}

// // 新增 POST 方法，支持 body 参数
// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     const { key, value }: any = body;

//     await redis.set(key, value);
//     const result = await redis.get(key);

//     return NextResponse.json({
//       success: true,
//       message: "Redis 写入成功",
//       result,
//     });
//   } catch (error) {
//     console.error("Redis 写入失败:", error);
//     return NextResponse.json(
//       {
//         success: false,
//         error: "Redis 写入失败",
//         message: error instanceof Error ? error.message : "未知错误",
//       },
//       { status: 500 }
//     );
//   }
// }
