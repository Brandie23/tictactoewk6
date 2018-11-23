import React, { Component } from "react";

class Video extends Component {
  render() {
    return (
      <div id="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/6PWRniGrWNQ?controls=0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    );
  }
}

export default Video;
