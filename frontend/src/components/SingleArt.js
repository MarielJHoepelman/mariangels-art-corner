import styled from "styled-components";
import { Link } from "react-router-dom";

export const SingleArt = ({ data, loading }) => {
  return loading ? (
    <div> loading... </div>
  ) : (
    <div>
      <div>
        <h1>{data.title}</h1>
        <h3>{data.body}</h3>
      </div>
      <div>
        {data?.image_file?.large && (
          <img src={data.image_file.large} alt="profile" />
        )}
      </div>
    </div>
  );
};
