import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Оптимизация для production
  poweredByHeader: false, // Убираем "X-Powered-By: Next.js" для безопасности
  
  // Сжатие
  compress: true,
  
  // Оптимизация изображений
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  
  // Заголовки безопасности и SEO
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // Безопасность
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          // Кэширование
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
        ],
      },
      // Кэширование статических файлов
      {
        source: '/(.*).(jpg|jpeg|png|gif|svg|webp|avif|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
    ];
  },
};

export default nextConfig;
