import MovieList from "@/views/MovieList";
import { getSEOTags } from "@/lib/seo";
import { discover_movie } from "@/lib/api";

export async function generateMetadata() {
  return getSEOTags({
    title: "Movie List - Viewing of Massive Movie Resources",
    description: `The MovieOrca movie list, browse a vast amount of movie resources. You can easily find your favorite movies and watch them all for free.`,
    keywords: [
      "MovieOrca",
      "Movie Orca",
      "Movie",
      "Orca",
      "cinema",
      "film",
      "TV",
      "movie list",
      "movie resources",
      "free cinema",
      "online movie",
    ],
    canonical: "/movie-list", // 页面相对路径
    url: "/movie-list", // 页面绝对路径
  });
}

export default async function Home() {
  const apiUrl = `${process.env.TMDB_API_BASE_URL}/3/discover/movie?api_key=${
    process.env.TMDB_API_KEY
  }&include_adult=false&include_video=false&language=en-US&page=${1}&sort_by=popularity.desc`;

  const response = await fetch(apiUrl, {
    next: { revalidate: 60 * 60 * 24 }, // 缓存时间：控制数据缓存和重新验证的关键
    // cache: 'force-cache' // 默认行为，除非指定 revalidate: 0 或 no-store
    // cache: 'no-store' // 完全禁用缓存，每次请求都重新获取
  });

  if (!response.ok) {
    throw new Error(`API 请求失败: ${response.status}`);
  }

  const res: any = await response.json();
  const movies = res?.results || [];

  return (
    <div>
      <div style={{ marginTop: 100 }}>{apiUrl}</div>
      <MovieList movies={movies} />
    </div>
  );
}
