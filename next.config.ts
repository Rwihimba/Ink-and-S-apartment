import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Allow .mdx files to be treated as pages/modules.
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: {
    // Serve modern formats; Next negotiates AVIF → WebP → original per request.
    formats: ["image/avif", "image/webp"],
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
