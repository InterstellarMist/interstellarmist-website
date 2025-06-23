import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { getFrontmatter } from "next-mdx-remote-client/utils";
import { MDXRemote } from "next-mdx-remote-client/rsc";

export default async function Page({
  params,
}: {
  params: { slug: string };
}): Promise<JSX.Element | null> {
  try {
    const filePath = path.join(process.cwd(), "content", `${params.slug}.mdx`);
    const source = fs.readFileSync(filePath, "utf8");
    const { frontmatter, strippedSource } = getFrontmatter(source);

    if (typeof strippedSource !== "string" || !strippedSource.trim()) {
      return <div>Post content not found or invalid.</div>;
    }

    return (
      <article className="prose mx-auto">
        <header>
          <h1>{frontmatter.title || params.slug}</h1>
          {frontmatter.publishedAt && (
            <p className="text-sm text-neutral-600">
              {frontmatter.publishedAt}
            </p>
          )}
        </header>
        <MDXRemote source={strippedSource} />
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
