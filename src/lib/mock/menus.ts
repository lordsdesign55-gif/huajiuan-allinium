import { CmsMenuItem } from './pages';

export const menus: CmsMenuItem[] = [
  { _id: 'header-1', label: 'Нүүр', url: '/', order: 1, kind: 'header' },
  { _id: 'header-2', label: 'Бидний тухай', url: '/about', order: 2, kind: 'header' },
  { _id: 'header-3', label: 'Үйлчилгээ', url: '/services', order: 3, kind: 'header' },
  { _id: 'header-4', label: 'Unitized Glass System', url: '/unitized-glass-system', order: 4, kind: 'header' },
  { _id: 'header-5', label: 'Зураг', url: '/gallery', order: 5, kind: 'header' },
  { _id: 'header-6', label: 'Мэдээ', url: '/blog', order: 6, kind: 'header' },
  { _id: 'header-7', label: 'Холбоо барих', url: '/contact', order: 7, kind: 'header' },

  { _id: 'footer-1', label: 'Нүүр', url: '/', order: 1, kind: 'footer' },
  { _id: 'footer-2', label: 'Бидний тухай', url: '/about', order: 2, kind: 'footer' },
  { _id: 'footer-3', label: 'Үйлчилгээ', url: '/services', order: 3, kind: 'footer' },
  { _id: 'footer-4', label: 'Unitized Glass System', url: '/unitized-glass-system', order: 4, kind: 'footer' },
  { _id: 'footer-5', label: 'Зураг', url: '/gallery', order: 5, kind: 'footer' },
  { _id: 'footer-6', label: 'Мэдээ', url: '/blog', order: 6, kind: 'footer' },
  { _id: 'footer-7', label: 'Холбоо барих', url: '/contact', order: 7, kind: 'footer' },
];

export function getHeaderMenus(): CmsMenuItem[] {
  return menus.filter((m) => m.kind === 'header').sort((a, b) => a.order - b.order);
}

export function getFooterMenus(): CmsMenuItem[] {
  return menus.filter((m) => m.kind === 'footer').sort((a, b) => a.order - b.order);
}
