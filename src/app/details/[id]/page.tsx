import MovieDetails from "@/views/MovieDetails";
import { getSEOTags } from "@/lib/seo";
// import { DetailsProps } from "@/lib/interface";
// import { movie_details } from "@/lib/api";

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
  const apiUrl = `${process.env.TMDB_API_BASE_URL}/3/movie/${resolvedParams.id}?api_key=${process.env.TMDB_API_KEY}`;

  const response = await fetch(apiUrl, {
    next: { revalidate: 60 * 60 * 24 }, // 缓存时间：控制数据缓存和重新验证的关键
    // cache: 'force-cache' // 默认行为，除非指定 revalidate: 0 或 no-store
    // cache: 'no-store' // 完全禁用缓存，每次请求都重新获取
  });

  if (!response.ok) {
    throw new Error(`API 请求失败: ${response.status}`);
  }

  const freshData: any = await response.json();
  console.log("freshData", freshData);

  return <MovieDetails detailsData={freshData} id={resolvedParams.id} />;
}
