import React, { Component } from "react";
import { ArtCard } from "./ArtCard";
import { ArtCardsContainer } from "../styles";

export class Art extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
    };
  }

  handleOnChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  };

  displayAllArt = () => {
    if (!this.props.content.display_art) {
      return [];
    } else {
      return this.props.content.display_art.filter((art) =>
        art.page_name.includes(this.state.search)
      );
    }
  };

  render() {
    return this.props.loading ? (
      <div> this.props.loading... </div>
    ) : (
      <>
        {false && (
          <div>
            <form onChange={this.handleOnChange}>
              <input type="text" name="search" />
            </form>
          </div>
        )}
        <ArtCardsContainer>
          {this.displayAllArt().map((art) => (
            <ArtCard key={art.page_name} art={art} />
          ))}
        </ArtCardsContainer>
      </>
    );
  }
}
