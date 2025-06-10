import MovieDetails from "@/views/MovieDetails";
import { getSEOTags } from "@/lib/seo";
import MovieList from "@/views/MovieList";
// import { DetailsProps } from "@/lib/interface";
// import { movie_details } from "@/lib/api";

export const runtime = "edge";

export async function generateMetadata() {
  return getSEOTags({
    title: "Movie Details - Plot Summary/Cast/Release Information",
    description: `This detail page provides plot summaries, cast, release dates, etc., bringing you comprehensive film and television materials and viewing experiences.`,
    keywords: [
      "MovieOrca",
      "Movie Orca",
      "Movie",
      "Orca",
      "cinema",
      "film",
      "TV",
      "movie details",
      "synopsis",
      "cast",
      "released time",
      "film",
    ],
    canonical: "/details", // 页面相对路径
    url: "/details", // 页面绝对路径
  });
}

export default async function Details({ params }: any) {
  const resolvedParams = await params;
  const apiUrl = `${process.env.TMDB_API_BASE_URL}/3/movie/950387?api_key=${process.env.TMDB_API_KEY}`;

  // 2. 在服务器上执行 fetch (这是修复问题的关键)
  let movieData = null;
  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      movieData = await response.json();
    }
  } catch (error) {
    console.error("获取详情失败:", error);
  }

  return (
    <div>
      <div style={{ marginTop: 100 }}>{apiUrl}</div>
      {/* <MovieDetails id={resolvedParams.id} /> */}
    </div>
  );
}
