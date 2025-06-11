import { createRoot } from 'react-dom/client'
import App from './common/App.tsx'

import { ApolloProvider } from '@apollo/client';
import graphqlClientConfig from './common/config/graphqqlClientConfig.ts';

createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={graphqlClientConfig}>
    <App />
  </ApolloProvider>
)
