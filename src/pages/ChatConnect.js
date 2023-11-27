import Loading from "./LoadingPage.js";
import { useEffect } from "react";
const ChatConnect = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsNotification("h Open");
    }, 3000);
  }, []);
  return <div>{isLoading ? <Loading /> : <div></div>}</div>;
};
export default ChatConnect;
