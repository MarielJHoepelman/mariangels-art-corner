import { ArtWrapper, RedirectToPath } from "../styles";

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
      <RedirectToPath to="/art">Back to Gallery</RedirectToPath>
    </ArtWrapper>
  );
};
