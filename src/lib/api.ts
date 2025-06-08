import { get } from "@/lib/request";

// 使用超过 30 种过滤器和排序选项查找电影
export const discover_movie = (data: any) => {
  return get("/api/discover-movie", data);
};

// 获取电影官方类型列表
export const genre_movie_list = (data: any) => {
  return get("/api/genre-movie-list", data);
};

// 通过 ID 获取电影的顶级详细信息
export const movie_details = (data: any) => {
  return get("/api/movie", data);
};
