import React, { Component } from "react";

export const About = ({ data, loading }) => {
  return loading ? (
    <div> loading... </div>
  ) : (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
};
