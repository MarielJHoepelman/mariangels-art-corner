import { Home as HomeComponent } from "../components/Home";
import { useContent } from "../hooks/useContent";

const Home = () => {
  const { content, loading } = useContent("/contents/home");
  return (
    <HomeComponent content={content} loading={loading} />
  );

}
export default Home;