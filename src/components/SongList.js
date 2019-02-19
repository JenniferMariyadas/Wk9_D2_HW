import React from "react";

const SongList = (props) =>
    const options = props.songs.map((song,index) => {
    return  <option value={song} key={index}>{song}</option>
      );
    };

  return(
    <div className='song-list'>
      <ul>
        <TopSongDetail songList={song.im} key={song.id.attributes["im:id"]}>
        {song["im:name"].label} </TopSongDetail>
      </ul>
    </div>
  )






export default MovieList;
