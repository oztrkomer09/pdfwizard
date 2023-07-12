import React from 'react';
import Layout from './components/Layout';
import LinkInput from './components/shared/LinkInput';
import Information from './components/shared/Information';
import ReversedInformation from './components/shared/ReversedInformation';

function App() {
  return (
    <Layout>
      <LinkInput />
      <Information />
      <ReversedInformation />
      <Information />
    </Layout>
  );
}

export default App;
