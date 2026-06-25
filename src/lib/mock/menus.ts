import { CmsMenuItem } from './pages';

export const menus: CmsMenuItem[] = [
  { _id: 'header-1', labelKey: 'home', url: '/', order: 1, kind: 'header' },
  { _id: 'header-2', labelKey: 'about', url: '/about', order: 2, kind: 'header' },
  { _id: 'header-3', labelKey: 'services', url: '/services', order: 3, kind: 'header' },
  { _id: 'header-4', labelKey: 'unitized', url: '/unitized-glass-system', order: 4, kind: 'header' },
  { _id: 'header-5', labelKey: 'metalWindows', url: '/metal-windows', order: 5, kind: 'header' },
  { _id: 'header-6', labelKey: 'gallery', url: '/gallery', order: 6, kind: 'header' },
  { _id: 'header-7', labelKey: 'blog', url: '/blog', order: 7, kind: 'header' },
  { _id: 'header-8', labelKey: 'contact', url: '/contact', order: 8, kind: 'header' },

  { _id: 'footer-1', labelKey: 'home', url: '/', order: 1, kind: 'footer' },
  { _id: 'footer-2', labelKey: 'about', url: '/about', order: 2, kind: 'footer' },
  { _id: 'footer-3', labelKey: 'services', url: '/services', order: 3, kind: 'footer' },
  { _id: 'footer-4', labelKey: 'unitized', url: '/unitized-glass-system', order: 4, kind: 'footer' },
  { _id: 'footer-5', labelKey: 'metalWindows', url: '/metal-windows', order: 5, kind: 'footer' },
  { _id: 'footer-6', labelKey: 'gallery', url: '/gallery', order: 6, kind: 'footer' },
  { _id: 'footer-7', labelKey: 'blog', url: '/blog', order: 7, kind: 'footer' },
  { _id: 'footer-8', labelKey: 'contact', url: '/contact', order: 8, kind: 'footer' },
];

export function getHeaderMenus(): CmsMenuItem[] {
  return menus.filter((m) => m.kind === 'header').sort((a, b) => a.order - b.order);
}

export function getFooterMenus(): CmsMenuItem[] {
  return menus.filter((m) => m.kind === 'footer').sort((a, b) => a.order - b.order);
}
