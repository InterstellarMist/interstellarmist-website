"use client";

import { useEffect, useState } from "react";
import MDXLayout from "./mdx-layout";

interface MDXRendererProps {
  slug: string;
}

export default function MDXRenderer({ slug }: MDXRendererProps) {
  const [MDXContent, setMDXContent] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMDX = async () => {
      try {
        const module = await import(`../blog/posts/${slug}.mdx`);
        setMDXContent(() => module.default);
      } catch (err) {
        console.error("Failed to load MDX:", err);
        setError("Failed to load content");
      }
    };

    loadMDX();
  }, [slug]);

  if (error) {
    return <div>Error loading content: {error}</div>;
  }

  if (!MDXContent) {
    return <div>Loading...</div>;
  }

  return (
    <MDXLayout>
      <MDXContent />
    </MDXLayout>
  );
}
