import React from "react";
import SongDetail from '../components/SongDetail';

const SongList = ({songs}) => {
    const songNodes = songs.map(song => {
    return (
    <SongDetail key={song.id.attributes["im:id"]}>
    {song["im:name"].label} </SongDetail>
      );
    });

  return(
    <div className='song-list'>
      {songNodes}
    </div>
  )

}






export default SongList;
