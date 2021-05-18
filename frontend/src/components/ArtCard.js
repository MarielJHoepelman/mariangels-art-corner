import { ArtCardLink } from "../styles";

export const ArtCard = ({ art }) => (
  <ArtCardLink to={`/art/${art.page_name}`} key={art.page_name}>
    <img src={art.image_file.square} alt={art.title} />
    <h3>{art.title}</h3>
  </ArtCardLink>
);
