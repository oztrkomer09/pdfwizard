import React from "react";
import Layout from "./components/Layout";
import LinkInput from "./components/sections/LinkInput";
import Information from "./components/sections/Information";
import Comments from "./components/sections/Comments";
import BottomSlogan from "./components/sections/BottomSlogan";
import Loading from "./components/shared/Loading";

import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  return (
    <Layout>
      {loading && <Loading />}
      <LinkInput setLoading={setLoading} loading={loading} />
      <Information />
      <Comments />
      <BottomSlogan />
    </Layout>
  );
}

export default App;
