import React, {Component, Fragment} from "react";
import SongList from '../components/SongList';

class TopSongs extends Component {
   constructor(props) {
     super(props);
     this.state = {
       songs: []
     };
   }

   componentDidMount () {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState(
        {songs: data.feed.entry})

    });

    request.send();
  };


  render () {
     return (
       <Fragment>
         <h2>UK Top Songs</h2>
         <SongList songs= {this.state.songs}/>
        </Fragment>
     );
   }
}






export default TopSongs;
