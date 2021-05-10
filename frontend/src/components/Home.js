import styled from "styled-components";
import { Link } from "react-router-dom";
import { ArtCard } from "./ArtCard";

const TopDiv = styled.div`
  padding-right: 100px;
  font-family: Montserrat;
`;

const ImageContainer = styled.div`
  padding-right: 100px;
`;

const TopDivWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
`;

const TopDivContainer = styled.div`
  padding: 30px 0;
  margin-bottom: 30px;
  background: rgb(255 100 126 / 8%);
  width: 100%;
`;

const StyledLink = styled(Link)`
  background: #ff627e;
  border: 1px solid #f4a8a8;
  color: #fff;
  font-size: 15px;
  line-height: 1em;
  height: auto;
  margin: 0;
  cursor: pointer;
  padding: 1.2em 25px 1.2em;
  vertical-align: middle;
  text-align: center;
  border-radius: 5px;
  display: inline-block;
  letter-spacing: 0.08em;
  margin-top: 8px;
  text-decoration: none;
`;

export const ArtCardsContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;
export const Home = ({ data, loading }) => {
  return loading ? (
    <div> loading... </div>
  ) : (
    <div>
      <TopDivContainer>
        <TopDivWrapper>
          <TopDiv>
            <h1>{data.title}</h1>
            <h3>{data.body}</h3>
          </TopDiv>
          <ImageContainer>
            {data?.image_file?.large && (
              <img src={data.image_file.medium} alt="profile" />
            )}
          </ImageContainer>
        </TopDivWrapper>
      </TopDivContainer>
      <div>
        <ArtCardsContainer>
          {data?.art_randomizer &&
            data.art_randomizer.map((art) => <ArtCard art={art} />)}
        </ArtCardsContainer>
        <ArtCardsContainer>
          <StyledLink to="/art">SEE ALL</StyledLink>
        </ArtCardsContainer>
      </div>
    </div>
  );
};
