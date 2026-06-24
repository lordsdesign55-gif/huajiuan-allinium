'use client';

import { ApolloClient, InMemoryCache, ApolloProvider as BaseApolloProvider, HttpLink } from '@apollo/client';
import { PropsWithChildren, useMemo } from 'react';

export function ApolloProvider({ children }: PropsWithChildren) {
  const client = useMemo(() => {
    return new ApolloClient({
      cache: new InMemoryCache(),
      link: new HttpLink({
        uri: process.env.NEXT_PUBLIC_ERXES_ENDPOINT || 'https://enhbayar.next.erxes.io/gateway/graphql',
        headers: {
          'erxes-app-token': process.env.NEXT_PUBLIC_ERXES_APP_TOKEN || '',
        },
      }),
    });
  }, []);

  return <BaseApolloProvider client={client}>{children}</BaseApolloProvider>;
}
