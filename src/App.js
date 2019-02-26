import React, { Component } from 'react';
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/video_list"
import VideoDetail from "./components/video_detail";
import _ from "lodash";

const API_KEY = 'AIzaSyBOCyCPuqhy4r_ktktsMKDl1-XNnWyocBs'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('surfboard');
  }
  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return (
      <div>
        <div class="jumbotron text-center">
            <SearchBar onSearchTermChange={videoSearch} />
        </div>

        <div class="container">
          <div class="row">
            <div class="col-sm-8">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div class="col-sm-4">
              <VideoList
                onVideoSelect={(selectedVideo) => { this.setState({ selectedVideo }) }}
                videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
