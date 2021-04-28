import styled from "styled-components";
import { Link } from "react-router-dom";

const TopDiv = styled.div`
  padding-right: 100px;
  font-family: Montserrat;
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
`;

export const Home = ({ data, loading }) => {
  return loading ? (
    <div> loading... </div>
  ) : (
    <div>
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
      <div>
        <div>
          {data?.art_randomizer &&
            data.art_randomizer.map((art) => (
              <Link to={`/art/${art.page_name}`}>
                <img
                  key={art.page_name}
                  src={art.image_file.square}
                  alt={art.title}
                />
              </Link>
            ))}
        </div>
        <StyledLink to="/art">See all</StyledLink>
      </div>
    </div>
  );
};
