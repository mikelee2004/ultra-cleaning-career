import { MetadataRoute } from 'next';

/**
 * Динамическая генерация robots.txt
 * Next.js автоматически создаст файл по адресу /robots.txt
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://rabota.cleankrd23.ru';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/scripts/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Yandex',
        allow: '/',
        crawlDelay: 0,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
