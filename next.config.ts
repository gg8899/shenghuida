import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // 关键：开启静态导出
  images: {
    unoptimized: true, // GitHub Pages 不支持 next/image 优化
  },
  basePath: '/shenghuida', // ⚠️ 必填（repo 名）
  assetPrefix: '/shenghuida/',
};

export default nextConfig;
