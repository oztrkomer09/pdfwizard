import React from "react";
import Layout from "./components/Layout";
import LinkInput from "./components/sections/LinkInput";
import Information from "./components/sections/Information";

function App() {
  return (
    <Layout>
      <LinkInput />
      <Information />
    </Layout>
  );
}

export default App;
