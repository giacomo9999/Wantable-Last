import React from "react";

const ArtistSubmitForm = (props) => {
  return (
    <div className="container-inner">
      <h1>Find An Artist</h1>
      <form className="h-form" onSubmit={props.submitArtist}>
        <label className="h-label">Name</label>
        <input
          className="h-input"
          onChange={props.handleInputChange}
          type="text"
          name="tempArtistName"
          value={props.tempArtistName}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ArtistSubmitForm;
