import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

const CACHE_KEY_PREFIX = "items_page_"; // 分页缓存前缀
const CACHE_TTL = 60 * 60 * 24; // 缓存24小时（单位：秒）

// 支持 GET 查询参数
export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const movie_id = url.searchParams.get("movie_id");

    const apiUrl = `${process.env.TMDB_API_BASE_URL}/3/movie/${movie_id}?api_key=${process.env.TMDB_API_KEY}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`API 请求失败: ${response.status}`);
    }

    const freshData = await response.text();

    return new Response(freshData, {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("处理请求时出错:", error);
    return new Response(`Error: ${error.message}`, { status: 500 });
  }
}
