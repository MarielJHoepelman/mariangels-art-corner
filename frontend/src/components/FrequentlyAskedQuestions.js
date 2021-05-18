import { FaqStyled } from "../styles";

export const FrequentlyAskedQuestions = ({ content, loading }) => {
  return (
    <FaqStyled>
      <h1>{content.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content.body }} />
    </FaqStyled>
  );
};
