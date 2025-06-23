import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally provide remark and rehype plugins
}

const withMDX = createMDX({
  // Add markdown plugins here, if needed
  // remarkPlugins: [],
  // rehypePlugins: [],
})

export default withMDX(nextConfig) 