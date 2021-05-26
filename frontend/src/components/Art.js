import { Link } from "react-router-dom";
import { ArtCard } from "./ArtCard";
import {
  TopDiv,
  ImageContainer,
  TopDivWrapper,
  ArtCardsContainer,
} from "../styles";

export const Art = ({ content, loading }) => {
  return loading ? (
    <div> loading... </div>
  ) : (
    <ArtCardsContainer>
      {content?.display_art &&
        content.display_art.map((art) => (
          <ArtCard key={art.page_name} art={art} />
        ))}
    </ArtCardsContainer>
  );
};
