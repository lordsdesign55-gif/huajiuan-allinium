import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';

const endpoint = process.env.NEXT_PUBLIC_ERXES_ENDPOINT || 'https://enhbayar.next.erxes.io/gateway/graphql';

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: endpoint,
      headers: {
        'erxes-app-token': process.env.NEXT_PUBLIC_ERXES_APP_TOKEN || '',
      },
    }),
  });
});
