export const runtime = "edge";

export default async function GET() {
  const hostname =
    process.env.NEXT_PUBLIC_API_BASE_URL || "https://movieorca.online";
  const urls = [
    { loc: `${hostname}/`, lastmod: new Date().toISOString(), priority: 1.0 },
    {
      loc: `${hostname}/movie-list`,
      lastmod: new Date().toISOString(),
      priority: 1.0,
    },
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">\n`;
  urls.forEach((item) => {
    xml += `<url><loc>${item.loc}</loc><lastmod>${item.lastmod}</lastmod><priority>${item.priority}</priority></url>\n`;
  });
  xml += `</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: { "Content-Type": "application/xml" },
  });
}
