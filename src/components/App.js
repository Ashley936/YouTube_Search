import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youTube from "../api/youTube";
import VideoDeatail from "./VideoDetail";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  onSubmit = async (term) => {
    const response = await youTube.get("/search", { params: { q: term } });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  componentDidMount() {
    this.onSubmit("Nightcore")
  }
  
  render() {
    return (
      <div className="ui container" style={{ paddingBottom: "30px" }}>
        <SearchBar onSubmit={this.onSubmit} />
        <div className="ui grid container">
          <div className="row">
            <div className="twelve wide column">
              <VideoDeatail video={this.state.selectedVideo} />
            </div>
            <div className="four wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
