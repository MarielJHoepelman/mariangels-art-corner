import { Bio } from "../styles";

export const About = ({ content, loading }) => {
  return loading ? (
    <div> loading... </div>
  ) : (
    <div>
      <Bio>
        <h1>{content.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content.body }} />
        {content?.image_file?.large && (
          <img src={content.image_file.large} alt="profile" />
        )}
      </Bio>
    </div>
  );
};
