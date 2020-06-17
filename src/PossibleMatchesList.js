import React from "react";

const PossibleMatchesList = (props) => {
  const matchList = props.possibleArtists.map((artist, index) => (
    <tr key={`artist_${index}`}>
      <td style={{ width: "400px" }}>{artist}</td>
      <td style={{ width: "75px" }}>
        <button onClick={() => props.showDiscography(artist)}>
          Show Details
        </button>
      </td>
    </tr>
  ));
  return (
    <div
      className="container-inner"
      data-test="component-possible-matches-list"
    >
      <h1>Possible Matches</h1>
      <table>
        <tbody>{matchList}</tbody>
      </table>
    </div>
  );
};

export default PossibleMatchesList;
