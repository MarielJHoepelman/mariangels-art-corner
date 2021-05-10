import styled from "styled-components";
import { Link } from "react-router-dom";
import { ArtCard } from "./ArtCard";

const TopDiv = styled.div`
  padding-right: 100px;
`;

const ImageContainer = styled.div`
  padding-right: 100px;
`;

const TopDivWrapper = styled.div`
  background: #ff627e;
  height: 500px;
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ArtCardsContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  max-width: 1450px;
  margin: 0 auto;
`;

export const Art = ({ content, loading }) => {
  return loading ? (
    <div> loading... </div>
  ) : (
    <ArtCardsContainer>
      {content?.display_art &&
        content.display_art.map((art) => <ArtCard art={art} />)}
    </ArtCardsContainer>
  );
};
