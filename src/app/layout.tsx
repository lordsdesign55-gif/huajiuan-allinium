import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Huajian Aluminium Mongolia — EOSS шилен пасад, металл пасад, гадна дуулаалга',
  description:
    'Huajian Aluminium Mongolia нь Хятадын Huajian Aluminium Mongolia компанийн EOSS брендийн шилен пасадыг Монголд албан ёсоор нэвтрүүлж буй барилгын фасад, дуулаалга, тоноглолын мэргэжлийн компани юм.',
  keywords: ['EOSS', 'шилен пасад', 'металл пасад', 'гадна дуулаалга', 'Huajian Aluminium Mongolia', 'Mongolia'],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="mn" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="font-sans">{children}</body>
    </html>
  );
}
