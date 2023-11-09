import { useState, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import LoadingPage from "./LoadingPage";

const ChatConnect = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="ChatConnet">
      <div className="Title-Chat">
        ChatConnect.io
        <img src="../ico.png" width="90" className="Icon-Chat"></img>
      </div>
      <div className="Bar-left">
        <FaHome />
      </div>
      {isLoading ? <LoadingPage /> : <div></div>}
    </div>
  );
};

export default ChatConnect;
