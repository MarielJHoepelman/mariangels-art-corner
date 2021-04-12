import React, { Component } from "react";

export const About = ({ data, loading }) => {
  return loading ? (
    <div> loading... </div>
  ) : (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
      {data?.image_file?.large && (
        <img src={data.image_file.large} alt="profile" />
      )}
    </div>
  );
};
