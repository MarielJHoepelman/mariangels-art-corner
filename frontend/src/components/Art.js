import styled from "styled-components";
import { Link } from "react-router-dom";

const TopDiv = styled.div`
  padding-right: 100px;
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

export const Art = ({ data, loading }) => {
  return loading ? (
    <div> loading... </div>
  ) : (
    <div>
      {data?.display_art &&
        data.display_art.map((art) => (
          <Link to={`/art/${art.page_name}`}>
            <img
              key={art.page_name}
              src={art.image_file.square}
              alt={art.title}
            />
          </Link>
        ))}
    </div>
  );
};
