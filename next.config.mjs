/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — Next emits a fully static site to ./out, which Cloudflare
  // Workers Static Assets serves directly with no Worker code required.
  output: "export",
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    // Required for `output: 'export'` and Cloudflare's edge — the Next.js
    // image optimizer isn't available at runtime.
    unoptimized: true
  },
  compiler: {
    // Strip console calls in production for a smaller bundle.
    removeConsole: { exclude: ["error", "warn"] }
  }
};

export default nextConfig;
