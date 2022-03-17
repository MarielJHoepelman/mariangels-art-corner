import { useContent } from "../hooks/useContent";
import { About as AboutComponent } from "../components/About";

const About = () => {
  const { content, loading } = useContent("contents/about");

  return (
    <AboutComponent
      content={content}
      loading={loading}
    />
  );
}

export default About;
