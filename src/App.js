import React, { Component } from "react";
import ArtistSubmitForm from "./ArtistSubmitForm";

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
