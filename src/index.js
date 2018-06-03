import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../components/search_bar.js';
import YTSearch from 'youtube-api-search';
import VideoList from '../components/video_list.js';
import VideoDetail from '../components/video_detail.js'

const API_KEY = 'AIzaSyADjO8UrcZi0x9uXoNtuJVf37TgJ4hD0aI';

class App extends Component {
  constructor(properties) {
  	super(properties);

  	this.state = { 
  	  videos: [],
  	  selectedVideo: null 
  	}; 
  	this.videoSearch('surfboards');
  }

  videoSearch(term){
  	YTSearch({key: API_KEY, term: term}, (videos) => {
	  this.setState({ 
	  	videos: videos,
	    selectedVideo: videos[0]
	  });
	}); 
  }

  render() {
    return(
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video = {this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos = {this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
