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
  // const res = await discover_movie({ page: 1 });
  // const movies = res.results || [];

  const apiUrl = `${process.env.TMDB_API_BASE_URL}/3/discover/movie?api_key=${
    process.env.TMDB_API_KEY
  }&include_adult=false&include_video=false&language=en-US&page=${1}&sort_by=popularity.desc`;

  console.log(
    1111,
    apiUrl,
    process.env.TMDB_API_BASE_URL,
    process.env.TMDB_API_KEY
  );

  const response = await fetch(apiUrl, {
    next: { revalidate: 60 }, // <-- 控制数据缓存和重新验证的关键
    // cache: 'force-cache' // 默认行为，除非指定 revalidate: 0 或 no-store
    // cache: 'no-store' // 完全禁用缓存，每次请求都重新获取
  });

  console.log(2222, response);

  if (!response.ok) {
    throw new Error(`API 请求失败: ${response.status}`);
  }

  // 6. 将新数据存入 Redis 缓存
  // const freshData = await response.text();
  const item: any = await response.json();

  console.log(3333, item);

  // const movies = await response.json();
  // if (!movies || !movies.results) {
  //   return <div>Error fetching movie data.</div>;
  // }

  const movies: any = [];

  return <MovieList movies={item.results} />;
}
