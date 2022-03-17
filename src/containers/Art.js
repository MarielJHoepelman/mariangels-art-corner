import { Art as ArtComponent } from "../components/Art";
import { useContent } from "../hooks/useContent";

const Art = () => {
  const { content, loading } = useContent("/contents/art");

  return (
    <ArtComponent content={content} loading={loading} />
  );
}

export default Art;
