import { useState, useEffect } from "react";
import { Art as ArtComponent } from "../components/Art";
import { asyncFetcher } from "../actions/asyncFetcher";

const Art = () => {
  const [art, setArt] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const callFetcher = async () => {
      const getArt = await asyncFetcher("/contents/art", "GET");
      setArt(getArt);
      setLoading(false);
    }

    callFetcher();
  }, []);

  return (
    <ArtComponent content={art} loading={loading} />
  );
}

export default Art;
