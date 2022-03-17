import { useEffect, useState } from "react";
import { asyncFetcher } from "../actions/asyncFetcher";

export const useContent = (page) => {
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const callFetcher = async () => {
      const getContent = await asyncFetcher(page, "GET");
      setContent(getContent);
      setLoading(false);
    }

    callFetcher();
  }, [page]);

  return { content, loading }
}
