# InterstellarMist Portfolio & Blog

A personal portfolio and blog built with Next.js App Router, React 19, Tailwind CSS, and dynamic MDX support via [next-mdx-remote-client](https://github.com/ipikuka/next-mdx-remote-client?tab=readme-ov-file#the-part-associated-with-nextjs-app-router).

---

## Features

- Personal portfolio homepage
- Dynamic MDX-powered blog (add posts by dropping `.mdx` files in `/content`)
- Blog post metadata (title, date, description)
- RSS feed and sitemap
- Dark mode support
- Fully type-safe and modern stack

---

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [next-mdx-remote-client](https://github.com/ipikuka/next-mdx-remote-client)

---

## Getting Started

1. **Install dependencies:**
   ```sh
   pnpm install
   # or
   npm install
   ```
2. **Run the development server:**
   ```sh
   pnpm dev
   # or
   npm run dev
   ```
3. **Visit** `http://localhost:3000` in your browser.

---

## MDX Blog Workflow

- All blog posts live in the `/content` directory as `.mdx` files.
- Each post should start with a frontmatter block:

  ```mdx
  ---
  title: "My Post Title"
  publishedAt: "2024-06-07"
  description: "A short summary of the post."
  ---

  # My Post Title

  Content goes here...
  ```

- The site will automatically pick up new posts on rebuild.

---

## Adding New Blog Posts

1. Create a new `.mdx` file in `/content` (e.g., `my-new-post.mdx`).
2. Add the required frontmatter fields:
   - `title` (string)
   - `publishedAt` (YYYY-MM-DD)
   - `description` (optional)
3. Write your post using Markdown/MDX syntax.
4. Rebuild/redeploy your site to see the new post live.

---

## Deployment

- **Recommended:** [Vercel](https://vercel.com/) (zero-config, instant deploys)
- Also works on Netlify, custom servers, or any platform supporting Next.js 15+ and React 19.

---

## Credits & License

- Built by Nicholas Chai
- Special thanks to the [Vercel Example Blog](https://github.com/vercel/examples/tree/main/solutions/blog) for inspiration and foundational code.
- MDX dynamic loading powered by [next-mdx-remote-client](https://github.com/ipikuka/next-mdx-remote-client)
- MIT License
