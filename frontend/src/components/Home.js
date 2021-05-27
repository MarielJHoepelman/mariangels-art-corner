import { ArtCard } from "./ArtCard";
import {
  HomeHeader,
  ImageContainer,
  HomeHeaderWrapper,
  HomeHeaderContainer,
  StyledLink,
  HomeArtCardsContainer,
  HomeLinkWrapper,
} from "../styles";

export const Home = ({ content, loading }) => {
  return loading ? (
    <div> loading... </div>
  ) : (
    <div>
      <HomeHeaderContainer>
        <HomeHeaderWrapper>
          <HomeHeader>
            <h1>{content.title}</h1>
            <h3>{content.body}</h3>
          </HomeHeader>
          <ImageContainer>
            {content?.image_file?.large && (
              <img src={content.image_file.medium} alt="profile" />
            )}
          </ImageContainer>
        </HomeHeaderWrapper>
      </HomeHeaderContainer>

      <HomeArtCardsContainer>
        {content?.art_randomizer &&
          content.art_randomizer.map((art) => (
            <ArtCard key={art.page_name} art={art} />
          ))}
      </HomeArtCardsContainer>
      <HomeLinkWrapper>
        <StyledLink to="/art">SEE ALL</StyledLink>
      </HomeLinkWrapper>
    </div>
  );
};
