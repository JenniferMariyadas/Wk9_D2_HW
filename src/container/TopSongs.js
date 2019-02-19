import React, {Component, Fragment} from "react";

class TopSongs extends Component {
   constructor(props) {
     super(props);
     this.state = {
       songs: []
     };

this.handleSongList = this.handleSongList.bind(this);
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
        {songs: data
        }
      )
    });

    request.send();
  };


  render () {
     return (
       <Fragment>
         <h2>UK Top Songs</h2>
         <songList
           songs= {this.state.songs}
           handleSongList = {this.handleSongList}
         />
        </Fragment>
     );
   }
}
















export default TopSongs;
