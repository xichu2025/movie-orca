import Home from "@/views/Home";
import { getSEOTags } from "@/lib/seo";

export async function generateMetadata() {
  return getSEOTags({
    title: "MovieOrca - Free Online Viewing of the Popular Movies",
    description: `On the MovieOrca, discover the latest and most popular movie resources, watch high-quality film and television content for free online.`,
    keywords: [
      "MovieOrca",
      "Movie Orca",
      "Movie",
      "Orca",
      "cinema",
      "film",
      "TV",
      "the latest movie",
      "popular movie",
      "online movie",
      "hd free",
    ],
    canonical: "https://movieorca.online/",
    url: "https://movieorca.online/",
  });
}

export default function Index() {
  return <Home />;
}
