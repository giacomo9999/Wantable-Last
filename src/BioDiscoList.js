import React from "react";

const BioDiscoList = (props) => {
  return (
    <div className="container-inner" data-test="bio-disco-list">
      <h1>{props.artistName}</h1>
      <div className="text-block" style={{ textAlign: "left" }}>
        <p>{props.artistBio}</p>
      </div>
    </div>
  );
};

export default BioDiscoList;
