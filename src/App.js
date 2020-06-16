import React, { Component } from "react";
import ArtistSubmitForm from "./ArtistSubmitForm";
import PossibleMatchesList from "./PossibleMatchesList";
import axios from "axios";

class App extends Component {
  state = {
    artistName: "",
    possibleArtistsPanelOpen: false,
    possibleArtists: [],
  };

  handleInputChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    // console.log(this.state);
  };

  submitArtist = (e) => {
    e.preventDefault();
    console.log(
      `submitArtist here...submitting ${this.state.artistName} to Last.fm database`
    );

    const formattedArtistName = this.state.artistName.toLowerCase();

    axios
      .get(
        `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${formattedArtistName}&api_key=${process.env.REACT_APP_LAST_API_KEY}&format=json`
      )
      .then(
        (response) => {
          const possibleArtists = [];
          response.data.results.artistmatches.artist.forEach((entry) => {
            possibleArtists.push(entry.name);
          });
          this.setState({
            possibleArtistsPanelOpen: true,
            possibleArtists: possibleArtists,
          });
          console.log(this.state);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  showDiscography = (artist) => {
    console.log("showDiscography for artist..." + artist);
  };

  render() {
    return (
      <div className="container-outer">
        <ArtistSubmitForm
          artistName={this.state.artistName}
          handleInputChange={this.handleInputChange}
          submitArtist={this.submitArtist}
        />
        {this.state.possibleArtistsPanelOpen === true ? (
          <PossibleMatchesList
            possibleArtists={this.state.possibleArtists}
            showDiscography={this.showDiscography}
          />
        ) : (
          <div className="container-inner" />
        )}
      </div>
    );
  }
}

export default App;
