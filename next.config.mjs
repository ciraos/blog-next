import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

const withMDX = createMDX({
    extension: /\.md?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    }
})

export default withMDX(nextConfig)