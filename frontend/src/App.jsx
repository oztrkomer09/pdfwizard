import React from "react";
import Layout from "./components/Layout";
import LinkInput from "./components/sections/LinkInput";
import Information from "./components/sections/Information";
import ReversedInformation from "./components/sections/ReversedInformation";

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
