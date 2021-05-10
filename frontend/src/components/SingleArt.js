import styled from "styled-components";
import { Link } from "react-router-dom";

const ArtWrapper = styled.div`
  text-align: center;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  line-height: 30px;
  font-family: Montserrat;
`;

export const SingleArt = ({ content, loading }) => {
  return loading ? (
    <div> loading... </div>
  ) : (
    <ArtWrapper>
      <h1>{content.title}</h1>
      <h3>{content.body}</h3>
      {content?.image_file?.large && (
        <img src={content.image_file.large} alt="profile" />
      )}
    </ArtWrapper>
  );
};
