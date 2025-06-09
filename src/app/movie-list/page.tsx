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
  const res = await discover_movie({ page: 1 });
  const movies = res.results || [];

  // const movies: any = [];

  return <MovieList movies={movies} />;
}
