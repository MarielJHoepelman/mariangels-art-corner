import styled from "styled-components";
import { Link } from "react-router-dom";

export const ArtCardLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  font-family: Montserrat;
  color: #ff627e;
  font-weight: bold;
  :hover {
    color: #41d5fa;
  }
`;

export const ArtCard = ({ art }) => (
  <ArtCardLink to={`/art/${art.page_name}`} key={art.page_name}>
    <img src={art.image_file.square} alt={art.title} />
    <h3>{art.title}</h3>
  </ArtCardLink>
);
