import { MetadataRoute } from 'next';

/**
 * Динамическая генерация sitemap.xml
 * Next.js автоматически создаст файл по адресу /sitemap.xml
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rabota.cleankrd23.ru';
  const currentDate = new Date().toISOString();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];
}
