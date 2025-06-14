import MovieList from "@/views/MovieList";
import { getSEOTags } from "@/lib/seo";
import { discover_movie } from "@/lib/api";

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
  const resolvedParams = await searchParams;

  const page = resolvedParams?.page || 1;
  const genre = resolvedParams?.genre || "";
  const query = resolvedParams?.query || "";

  const apiUrl2 = `${process.env.TMDB_API_BASE_URL}/3/genre/movie/list?api_key=${process.env.TMDB_API_KEY}`;
  const response2 = await fetch(apiUrl2, {
    next: { revalidate: 60 * 60 * 24 }, // 缓存时间：控制数据缓存和重新验证的关键
    // cache: 'force-cache' // 默认行为，除非指定 revalidate: 0 或 no-store
    // cache: 'no-store' // 完全禁用缓存，每次请求都重新获取
  });

  if (!response2.ok) {
    throw new Error(`API 请求失败: ${response2.status}`);
  }

  const res2: any = await response2.json();
  const genres = res2.genres;
  const currentGenre = genres.find((item: any) => item.id === Number(genre));

  let title = "";
  if (genre) {
    title = `MovieOrca - Browse Massive ${currentGenre.name} Movie Resources by Category `;
  } else if (query) {
    title = `MovieOrca - Browse Massive ${query} Movie Resources by Category`;
  } else {
    title = "MovieOrca - Viewing of Massive Movie Resources";
  }

  return getSEOTags({
    title: title,
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
    canonical: "https://movieorca.online/movie-list",
    url: "https://movieorca.online/movie-list",
  });
}

export const runtime = "edge";

export default async function Home({ searchParams }: any) {
  const resolvedParams = await searchParams;
  const page = Number(resolvedParams.page) || 1;
  const query = resolvedParams?.query || "";
  let apiUrl = "";

  if (query) {
    // 搜索
    apiUrl = `${process.env.TMDB_API_BASE_URL}/3/search/multi?api_key=${process.env.TMDB_API_KEY}&query=${query}&include_adult=false&language=en-US&page=${page}`;
  } else {
    // 电影列表
    apiUrl = `${process.env.TMDB_API_BASE_URL}/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;
  }

  const response = await fetch(apiUrl, {
    next: { revalidate: 60 * 60 * 24 }, // 缓存时间：控制数据缓存和重新验证的关键
    // cache: 'force-cache' // 默认行为，除非指定 revalidate: 0 或 no-store
    // cache: 'no-store' // 完全禁用缓存，每次请求都重新获取
  });

  if (!response.ok) {
    throw new Error(`API 请求失败: ${response.status}`);
  }

  const res: any = await response.json();
  let movies = res?.results || [];

  // ***********************************************************************************************************

  const apiUrl2 = `${process.env.TMDB_API_BASE_URL}/3/genre/movie/list?api_key=${process.env.TMDB_API_KEY}`;
  const response2 = await fetch(apiUrl2, {
    next: { revalidate: 60 * 60 * 24 }, // 缓存时间：控制数据缓存和重新验证的关键
    // cache: 'force-cache' // 默认行为，除非指定 revalidate: 0 或 no-store
    // cache: 'no-store' // 完全禁用缓存，每次请求都重新获取
  });

  if (!response2.ok) {
    throw new Error(`API 请求失败: ${response2.status}`);
  }

  const res2: any = await response2.json();
  const genres = res2.genres;

  // ***********************************************************************************************************

  const genre = resolvedParams?.genre || "";
  if (genre) {
    const apiUrl3 = `${process.env.TMDB_API_BASE_URL}/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=${genre}&page=${page}`;
    const response3 = await fetch(apiUrl3, {
      next: { revalidate: 60 * 60 * 24 }, // 缓存时间：控制数据缓存和重新验证的关键
      // cache: 'force-cache' // 默认行为，除非指定 revalidate: 0 或 no-store
      // cache: 'no-store' // 完全禁用缓存，每次请求都重新获取
    });

    if (!response3.ok) {
      throw new Error(`API 请求失败: ${response3.status}`);
    }

    const res3: any = await response3.json();
    movies = res3.results || [];
  }

  return (
    <MovieList
      movies={movies}
      query={query}
      genres={genres}
      selectedGenre={genre}
      page={page}
      total_pages={res.total_pages}
    />
  );
}
