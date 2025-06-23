import { baseUrl } from 'app/sitemap'
import fs from 'fs';
import path from 'path';

function getMetadata(filePath: string) {
  const content = fs.readFileSync(filePath, 'utf8');
  const match = content.match(/export const metadata =\s*({[\s\S]*?})/);
  if (match) {
    try {
      // eslint-disable-next-line no-eval
      const metadata = eval('(' + match[1] + ')');
      return metadata;
    } catch {
      return {};
    }
  }
  return {};
}

export async function GET() {
  const contentDir = path.join(process.cwd(), 'content');
  const files = fs.readdirSync(contentDir);
  const allBlogs = files
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => {
      const slug = f.replace(/\.mdx$/, '');
      const metadata = getMetadata(path.join(contentDir, f));
      return { slug, metadata };
    });

  const itemsXml = allBlogs
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1;
      }
      return 1;
    })
    .map(
      (post) =>
        `<item>
          <title>${post.metadata.title}</title>
          <link>${baseUrl}/blog/${post.slug}</link>
          <description>${post.metadata.summary || ''}</description>
          <pubDate>${new Date(
            post.metadata.publishedAt
          ).toUTCString()}</pubDate>
        </item>`
    )
    .join('\n');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>My Portfolio</title>
        <link>${baseUrl}</link>
        <description>This is my portfolio RSS feed</description>
        ${itemsXml}
    </channel>
  </rss>`;

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'text/xml',
    },
  });
}
