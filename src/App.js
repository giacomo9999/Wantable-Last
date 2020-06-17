import React, { Component } from "react";
import ArtistSubmitForm from "./ArtistSubmitForm";
import PossibleMatchesList from "./PossibleMatchesList";
import BioDiscoList from "./BioDiscoList";
import axios from "axios";

class App extends Component {
  state = {
    tempArtistName: "",
    artistName: "",
    artistBio: "",
    artistDiscography: [],
    bioDiscoPanelOpen: false,
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
    // console.log(
    //   `submitArtist here...submitting ${this.state.tempArtistName} to Last.fm database`
    // );

    const formattedArtistName = this.state.tempArtistName.toLowerCase();

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
            tempArtistName: "",
            possibleArtistsPanelOpen: true,
            possibleArtists: possibleArtists,
          });
          // console.log(this.state);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  showDiscography = (artist) => {
    console.log("showDiscography for artist..." + artist);
    axios
      .get(
        `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=${process.env.REACT_APP_LAST_API_KEY}&format=json`
      )
      .then(
        (response) => {
          // console.log(response);
          this.setState({
            possibleArtistsPanelOpen: false,
            bioDiscoPanelOpen: true,
            artistName: artist,
            artistBio: response.data.artist.bio.summary.split("<")[0],
          });
        },
        (error) => {
          console.log(error);
        }
      );
  };

  render() {
    return (
      <div className="container-outer">
        <ArtistSubmitForm
          tempArtistName={this.state.tempArtistName}
          handleInputChange={this.handleInputChange}
          submitArtist={this.submitArtist}
        />
        {this.state.possibleArtistsPanelOpen === true ? (
          <PossibleMatchesList
            possibleArtists={this.state.possibleArtists}
            showDiscography={this.showDiscography}
          />
        ) : (
          <div />
        )}
        {this.state.bioDiscoPanelOpen === true ? (
          <BioDiscoList
            artistName={this.state.artistName}
            artistBio={this.state.artistBio}
          />
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default App;
