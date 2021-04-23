import styled from "styled-components";

const TopDiv = styled.div`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Home = ({ data, loading }) => {
  return loading ? (
    <div> loading... </div>
  ) : (
    <div>
      <TopDiv>
        <h1>{data.title}</h1>
        <h3>{data.body}</h3>
        {/*data?.image_file?.large && (
        <img src={data.image_file.thumb} alt="bubble" />
      )*/}
      </TopDiv>
      <div>
        <div>
          {data?.display_art &&
            data.display_art.map((art) => (
              <img
                key={art.page_name}
                src={art.image_file.medium}
                alt={art.title}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
