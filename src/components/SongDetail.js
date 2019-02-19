import React from "react";

const SongDetail = ({song}) => {
  if(!song) return null;
  return (
    <div>
      <h2>{song.title}</h2>
      <h3>{song.artist}</h3>
    </div>
  )
}




export default SongDetail;
