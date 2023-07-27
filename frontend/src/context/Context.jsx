import { createContext, useContext, useState, useEffect } from "react";

const cvContext = createContext();

export const CvProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const API = "30774faf5b15f5bd1210d7c4d1b20e52";
  const [url, setUrl] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [cloneId, setCloneId] = useState("");
  const [scrape, setScrape] = useState();

  const data = {
    loading,
    setLoading,
    isModalOpen,
    setIsModalOpen,
    API,
    url,
    setUrl,
    disabled,
    setDisabled,
    cloneId,
    setCloneId,
    scrape,
    setScrape,
  };

  return <cvContext.Provider value={data}>{children}</cvContext.Provider>;
};

export const useCvContext = () => useContext(cvContext);
