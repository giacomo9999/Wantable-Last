import React from "react";

const BioDiscoList = (props) => {
  //   const matchList = props.possibleArtists.map((artist, index) => (
  //     <tr key={`artist_${index}`}>
  //       <td style={{ width: "400px" }}>{artist}</td>
  //       <td style={{ width: "75px" }}>
  //         <button onClick={() => props.showDiscography(artist)}>
  //           Show Details
  //         </button>
  //       </td>
  //     </tr>
  //   ));
  return (
    <div className="container-inner">
      <h1>{props.artistName}</h1>
      <div className="text-block" style={{ textAlign: "left" }}>
        <p>{props.artistBio}</p>
      </div>

      {/* <table>
        <tbody>{matchList}</tbody>
      </table> */}
    </div>
  );
};

export default BioDiscoList;
