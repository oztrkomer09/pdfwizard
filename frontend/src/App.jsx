import React from "react";
import Layout from "./components/Layout";
import LinkInput from "./components/sections/LinkInput";
import Information from "./components/sections/Information";
import Comments from "./components/sections/Comments";
import BottomSlogan from "./components/sections/BottomSlogan";
import Loading from "./components/shared/Loading";
import Modal from "./components/shared/Modal";

import { useState } from "react";
import { useCvContext } from "./context/Context";

function App() {
  const { loading, isModalOpen } = useCvContext();
  return (
    <Layout>
      {loading && <Loading />}
      {isModalOpen && <Modal />}
      <LinkInput />
      <Information />
      <Comments />
      <BottomSlogan />
    </Layout>
  );
}

export default App;
