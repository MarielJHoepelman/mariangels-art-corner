import styled from "styled-components";

const FaqStyled = styled.div`
  text-align: center;
  font-family: Montserrat;
`;

export const FrequentlyAskedQuestions = ({ content, loading }) => {
  return (
    <FaqStyled>
      <h1>{content.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content.body }} />
    </FaqStyled>
  );
};
