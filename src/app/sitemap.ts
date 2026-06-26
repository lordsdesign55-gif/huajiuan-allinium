import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

const BASE_URL = 'https://huajiuan-allinium.vercel.app';

const STATIC_PATHS = ['', 'about', 'services', 'gallery', 'blog', 'contact', 'unitized-glass-system', 'metal-windows'];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const path of STATIC_PATHS) {
      const urlPath = path ? `/${locale}/${path}` : `/${locale}`;
      entries.push({
        url: `${BASE_URL}${urlPath}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: path === '' ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((alt) => [alt, `${BASE_URL}${alt === locale ? urlPath : path ? `/${alt}/${path}` : `/${alt}`}`])
          ),
        },
      });
    }
  }

  return entries;
}
