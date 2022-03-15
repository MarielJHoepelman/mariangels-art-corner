import { useEffect, useState } from "react";
import { Home as HomeComponent } from "../components/Home";
import { asyncFetcher } from "../actions/asyncFetcher";

const Home = () => {
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const callFetcher = async () => {
      const getContent = await asyncFetcher("contents/home", "GET");
      setContent(getContent);
      setLoading(false);
    }

    callFetcher();
  }, []);

  return (
    <HomeComponent
      content={content}
      loading={loading}
    />
  );

}
export default Home;