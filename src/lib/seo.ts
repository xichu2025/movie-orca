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
      canonical, // 注意这里应该是相对路径
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
