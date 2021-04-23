import styled from "styled-components";

const Bio = styled.div`
  text-align: center;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  line-height: 30px;
`;

export const About = ({ data, loading }) => {
  return loading ? (
    <div> loading... </div>
  ) : (
    <div>
      <Bio>
        <h1>{data.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.body }} />
        {data?.image_file?.large && (
          <img src={data.image_file.large} alt="profile" />
        )}
      </Bio>
    </div>
  );
};
