import React from "react";
import Layout from "./components/Layout";
import LinkInput from "./components/sections/LinkInput";
import Information from "./components/sections/Information";
import Comments from "./components/sections/Comments";

function App() {
  return (
    <Layout>
      <LinkInput />
      <Information />
      <Comments />
    </Layout>
  );
}

export default App;
