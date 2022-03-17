import { useContent } from "../hooks/useContent";
import { FrequentlyAskedQuestions as FrequentlyAskedQuestionsComponent } from "../components/FrequentlyAskedQuestions";

const FrequentlyAskedQuestions = () => {
  const { content, loading } = useContent("contents/frequently-asked-questions");

  return (
    <FrequentlyAskedQuestionsComponent
      content={content}
      loading={loading}
    />
  );
}

export default FrequentlyAskedQuestions;