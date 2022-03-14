import React, { useState } from "react";
import { ArtCard } from "./ArtCard";
import { ArtCardsContainer, StyledInput, ArtSearch } from "../styles";

export const Art = (props) => {
  console.log("hello props", props)
  const [search, setSearch] = useState("");

  const displayAllArt = () => {
    return props.content.display_art.filter((art) =>
      art.title.toLowerCase().includes(search.toLowerCase())
    );
  };

  const handleOnChange = (event) => {
    setSearch(event.target.value);
  };

  if (props.loading) {
    return <div> LOADING...</div>;
  } else {
    return (
      <>
        <ArtSearch>
          <StyledInput
            value={search}
            onChange={handleOnChange}
            placeholder="search art"
          />
        </ArtSearch>
        <ArtCardsContainer>
          {props?.content?.display_art &&
            displayAllArt().map((art) => (
              <ArtCard key={art.page_name} art={art} />
            ))}
        </ArtCardsContainer>
      </>
    );
  }
};
