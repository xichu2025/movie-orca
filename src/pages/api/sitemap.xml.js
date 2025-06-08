// pages/api/sitemap.xml.js
import { SitemapStream, streamToPromise } from "sitemap";

// 静态页面sitemap
const staticSitemapUrl = [
  {
    url: "/",
    lastmod: new Date().toISOString(),
    priority: 1.0,
  },
  {
    url: "/movie-list",
    lastmod: new Date().toISOString(),
  },
];

export default async function handler(req, res) {
  try {
    const hostname = process.env.NEXT_PUBLIC_API_BASE_URL;

    // 初始化SitemapStream实例
    const smStream = new SitemapStream({ hostname });

    // 静态页面sitemap
    staticSitemapUrl.forEach((item) => {
      smStream.write({
        url: item.url,
        changefreq: "daily",
        priority: 1.0,
        lastmod: item.lastmod,
      });
    });

    // 结束流并生成最终的XML字符串
    smStream.end();
    const xmlString = await streamToPromise(smStream).then((data) =>
      data.toString()
    );

    // 设置响应头为text/xml，并发送XML字符串
    res.setHeader("Content-Type", "application/xml");
    res.status(200).send(xmlString);
  } catch (error) {
    console.error("Error generating sitemap:", error);
    res.status(500).send("Error generating sitemap.");
  }
}
