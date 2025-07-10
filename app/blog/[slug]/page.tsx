import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { getFrontmatter } from "next-mdx-remote-client/utils";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { components } from "../../components/mdx-layout";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<JSX.Element | null> {
  const { slug } = await params;
  try {
    // Decode the slug to handle URL-encoded characters (like spaces)
    const decodedSlug = decodeURIComponent(slug);
    const filePath = path.join(process.cwd(), "content", `${decodedSlug}.mdx`);
    const source = fs.readFileSync(filePath, "utf8");
    const { frontmatter, strippedSource } = getFrontmatter(source);

    // Type narrowing for frontmatter fields
    const title =
      typeof frontmatter?.title === "string" ? frontmatter.title : decodedSlug;
    const publishedAt =
      typeof frontmatter?.publishedAt === "string"
        ? frontmatter.publishedAt
        : undefined;
    const mdxSource = typeof strippedSource === "string" ? strippedSource : "";

    if (!mdxSource.trim()) {
      return <div>Post content not found or invalid.</div>;
    }

    return (
      <article className="prose mx-auto max-w-2xl">
        <header>
          <h1>{title}</h1>
          {publishedAt && (
            <p className="text-sm text-neutral-600">{publishedAt}</p>
          )}
        </header>
        <MDXRemote source={mdxSource} components={components} />
      </article>
    );
  } catch (e) {
    notFound();
    return null;
  }
}

export function generateStaticParams() {
  const contentDir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(contentDir);
  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => ({ slug: f.replace(/\.mdx$/, "") }));
}

export const dynamicParams = false;
