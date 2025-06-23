import fs from 'fs';
import path from 'path';

export const baseUrl = 'https://portfolio-blog-starter.vercel.app';

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

export default async function sitemap() {
  const contentDir = path.join(process.cwd(), 'content');
  const files = fs.readdirSync(contentDir);
  const blogs = files
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => {
      const slug = f.replace(/\.mdx$/, '');
      const metadata = getMetadata(path.join(contentDir, f));
      return { slug, metadata };
    });

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
    },
    ...blogs.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.metadata.publishedAt || new Date().toISOString(),
    })),
  ];
}
