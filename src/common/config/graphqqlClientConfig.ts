import { ApolloClient, InMemoryCache } from '@apollo/client';
import { commonAppConfig } from './appConfig';

const graphqlClientConfig = new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    uri: commonAppConfig.graphqlBaseUrl
});

export default graphqlClientConfig;