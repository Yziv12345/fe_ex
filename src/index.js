import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';

const storyblokLink = createHttpLink({
  uri: 'https://gapi.storyblok.com/v1/api',
  headers: {
    token: 'HwsawDuLR2g1sBoukqkPDQtt',
    version: 'draft',
  },
});

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {},
    },
  },
});

const client = new ApolloClient({
  link: ApolloLink.from([storyblokLink]),
  cache,
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
