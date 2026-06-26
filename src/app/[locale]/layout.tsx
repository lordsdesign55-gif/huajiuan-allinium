import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { routing } from '@/i18n/routing';
import { ApolloProvider } from '@/lib/apollo/provider';
import { LenisProvider } from '@/components/providers/LenisProvider';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Chatbot } from '@/components/chatbot/Chatbot';

export const metadata: Metadata = {
  title: 'Huajian Aluminium Mongolia | EOSS - Барилгын пасад, дулаалга, тоног төхөөрөмж',
  description:
    'Huajian Aluminium Mongolia - EOSS шилэн пасад, металл цонх, Alucobond фасад, Rockwool дулаалга, барилгын тоног төхөөрөмжийн албан ёсны ханган нийлүүлэгч. 7000-9559',
  keywords: [
    'EOSS Mongolia',
    'Huajian Aluminium Mongolia',
    'шилэн пасад',
    'unitized glass system',
    'металл цонх',
    'Alucobond',
    'Rockwool',
    'барилгын дулаалга',
    'пасадны систем',
    'Улаанбаатар',
  ],
  metadataBase: new URL('https://huajiuan-allinium.vercel.app'),
  alternates: {
    canonical: '/',
    languages: {
      mn: '/mn',
      en: '/en',
    },
  },
  openGraph: {
    title: 'Huajian Aluminium Mongolia | EOSS Mongolia',
    description:
      'Барилгын пасад, дулаалга, металл цонх, тоног төхөөрөмжийн шийдэл. 7000-9559',
    url: 'https://huajiuan-allinium.vercel.app',
    siteName: 'Huajian Aluminium Mongolia',
    locale: 'mn_MN',
    type: 'website',
    images: [
      {
        url: '/images/project-2.jpg',
        width: 1200,
        height: 630,
        alt: 'EOSS Glass Facade Project',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Huajian Aluminium Mongolia | EOSS Mongolia',
    description: 'Барилгын пасад, дулаалга, металл цонх, тоног төхөөрөмжийн шийдэл.',
    images: ['/images/project-2.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Huajian Aluminium Mongolia',
  alternateName: 'Гэр групп',
  url: 'https://huajiuan-allinium.vercel.app',
  logo: 'https://huajiuan-allinium.vercel.app/logo.svg',
  image: 'https://huajiuan-allinium.vercel.app/images/project-2.jpg',
  telephone: '+976 7000 9559',
  email: 'gergroup11@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Улаанбаатар',
    streetAddress: 'Баянзүрх дүүрэг, 5-р хороо, Монелийн задгай',
    addressCountry: 'MN',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  sameAs: ['https://www.facebook.com/gergroup'],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'mn' | 'en')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <Script
          id="local-business-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ApolloProvider>
            <LenisProvider>
              <Header />
              <main>{children}</main>
              <Footer />
              <Chatbot />
            </LenisProvider>
          </ApolloProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
