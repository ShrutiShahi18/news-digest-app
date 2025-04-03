import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NhostClient } from '@nhost/nhost-js';
import { NhostProvider } from '@nhost/react'; // Correct import
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Login from './Login';
import Dashboard from './Dashboard';
import Signup from './Signup';

const nhost = new NhostClient({
  subdomain: import.meta.env.VITE_NHOST_SUBDOMAIN,
  region: import.meta.env.VITE_NHOST_REGION,
  clientStorageType: 'localStorage',
  autoRefreshToken: true,
  autoSignIn: true,
});

const apolloClient = new ApolloClient({
  uri: `https://${import.meta.env.VITE_NHOST_SUBDOMAIN}.nhost.run/v1/graphql`,
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${nhost.auth.getAccessToken()}`,
  },
});

function App() {
  return (
    <NhostProvider nhost={nhost}>  {/* Updated to NhostProvider */}
      <ApolloProvider client={apolloClient}>
        <Router>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </NhostProvider>
  );
}

export default App;
