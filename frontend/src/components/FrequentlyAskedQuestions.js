import styled from "styled-components";

const FaqStyled = styled.div`
  text-align: center;
  font-family: Montserrat;
`;

export const FrequentlyAskedQuestions = ({ data, loading }) => {
  return (
    <FaqStyled>
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.body }} />
    </FaqStyled>
  );
};
