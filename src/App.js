import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Heading
} from '@chakra-ui/react';
import Layout from './components/Layout';
import EntriesPage from './pages/entries';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <EntriesPage />
      </Layout>

    </ChakraProvider>
  );
}

export default App;
