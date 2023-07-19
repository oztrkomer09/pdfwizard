import React from "react";
import Layout from "./components/Layout";
import LinkInput from "./components/sections/LinkInput";
import Information from "./components/sections/Information";
import Comments from "./components/sections/Comments";
import BottomSlogan from "./components/sections/BottomSlogan";

function App() {
  return (
    <Layout>
      <LinkInput />
      <Information />
      <Comments />
      <BottomSlogan />
    </Layout>
  );
}

export default App;
