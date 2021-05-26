import { Link } from "react-router-dom";
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

export const Home = ({ data, loading }) => {
  return loading ? (
    <div> loading... </div>
  ) : (
    <div>
      <HomeHeaderContainer>
        <HomeHeaderWrapper>
          <HomeHeader>
            <h1>{data.title}</h1>
            <h3>{data.body}</h3>
          </HomeHeader>
          <ImageContainer>
            {data?.image_file?.large && (
              <img src={data.image_file.medium} alt="profile" />
            )}
          </ImageContainer>
        </HomeHeaderWrapper>
      </HomeHeaderContainer>

      <HomeArtCardsContainer>
        {data?.art_randomizer &&
          data.art_randomizer.map((art) => <ArtCard art={art} />)}
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
