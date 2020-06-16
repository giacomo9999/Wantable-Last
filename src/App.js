import React, { Component } from "react";
import ArtistSubmitForm from "./ArtistSubmitForm";
import axios from "axios";

class App extends Component {
  state = { artistName: "", resultsPanelOpen: false };

  handleInputChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  submitArtist = (e) => {
    e.preventDefault();
    console.log(
      `submitArtist here...submitting ${this.state.artistName} to Last.fm database`
    );
    this.setState({
      artistName: "",
      resultsPanelOpen: false,
    });

    axios
      .get(
        "http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=blue_oyster_cult&api_key=0fee157d3e08962839adacc77a33744c&format=json"
      )
      .then(
        (response) => {
          console.log(response.data);
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
          artistName={this.state.artistName}
          handleInputChange={this.handleInputChange}
          submitArtist={this.submitArtist}
        />
      </div>
    );
  }
}

export default App;
