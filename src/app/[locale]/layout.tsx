import type { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { ApolloProvider } from '@/lib/apollo/provider';
import { LenisProvider } from '@/components/providers/LenisProvider';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'mn')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ApolloProvider>
        <LenisProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </ApolloProvider>
    </NextIntlClientProvider>
  );
}
