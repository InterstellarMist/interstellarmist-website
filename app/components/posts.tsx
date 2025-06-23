import Link from "next/link";
import fs from "fs";
import path from "path";
import { formatDate } from "../utils";

function getMetadata(filePath: string) {
  const content = fs.readFileSync(filePath, "utf8");
  const match = content.match(/export const metadata =\s*({[\s\S]*?})/);
  if (match) {
    try {
      // eslint-disable-next-line no-eval
      const metadata = eval("(" + match[1] + ")");
      return metadata;
    } catch {
      return {};
    }
  }
  return {};
}

export function BlogPosts() {
  const contentDir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(contentDir);
  const allBlogs = files
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const slug = f.replace(/\.mdx$/, "");
      const metadata = getMetadata(path.join(contentDir, f));
      return {
        slug,
        title: metadata.title || slug,
        publishedAt: metadata.publishedAt || "",
      };
    })
    .sort((a, b) => {
      if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
        return -1;
      }
      return 1;
    });

  return (
    <div>
      {allBlogs.map((post) => (
        <Link
          key={post.slug}
          className="flex flex-col space-y-1 mb-4"
          href={`/blog/${post.slug}`}
        >
          <div className="w-full flex flex-col md:flex-row md:items-baseline space-x-0 md:space-x-2">
            <div className="w-[150px] flex-shrink-0">
              <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-right w-full">
                {post.publishedAt ? formatDate(post.publishedAt) : ""}
              </p>
            </div>
            <div className="flex-1">
              <p className="text-neutral-900 dark:text-neutral-100 text-left w-full">
                {post.title}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
