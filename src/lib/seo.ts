interface ISEOParams {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  url: string;
}

export const getSEOTags = ({
  title,
  description,
  keywords,
  canonical,
  url,
}: ISEOParams) => {
  return {
    title,
    description,
    keywords,
    canonical,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Movie Orca",
      type: "website",
    },
    twitter: {
      title,
      description,
      url,
      card: "summary",
    },
  };
};
