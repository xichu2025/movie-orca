import MovieDetails from "@/views/MovieDetails";
import { getSEOTags } from "@/lib/seo";
import { DetailsProps } from "@/lib/interface";
import { movie_details } from "@/lib/api";

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

export default async function Details({ params }: DetailsProps) {
  const res = await movie_details({ movie_id: params.id });

  return <MovieDetails detailsData={res} id={params.id} />;
}
