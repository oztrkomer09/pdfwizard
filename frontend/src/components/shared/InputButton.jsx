import { useState, React } from "react";
import go from "../../assets/images/go.png";

const InputButtonComponent = () => {
  const [url, setUrl] = useState("");

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const fetchUserData = async () => {
    const response = await fetch("http://localhost:3000/scrape", {
      method: "POST",
      body: JSON.stringify({ url }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="link-input">
      <input
        onChange={handleChange}
        type="text"
        placeholder="Paste the link and run the wizard"
      />
      <button onClick={fetchUserData}>
        <img src={go} alt="go" />
      </button>
    </div>
  );
};

export default InputButtonComponent;
