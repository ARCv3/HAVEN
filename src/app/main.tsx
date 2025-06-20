import { createRoot } from 'react-dom/client'

import { ApolloProvider } from '@apollo/client';
import graphqlClientConfig from '../common/config/graphqqlClientConfig.ts';

import { createBrowserRouter, RouterProvider } from "react-router";
import routes from "./routes";

import "./main.css"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={graphqlClientConfig}>
      <RouterProvider router={router}/>
  </ApolloProvider>
);
