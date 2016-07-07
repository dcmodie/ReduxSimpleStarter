import React from 'react';
import App from '../index.js';
const VideoListItem = (props) => {
  const title = props.video.snippet.title
  const thumb = props.video.snippet.thumbnails.default.url
  console.log ("thumb")
  return   (
      <li className="list-group-item" onClick = {event => App.test}>

        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={thumb} />
          </div>
          <div className="media-body">
            <div className="media-heading">{title}</div>
          </div>

        </div>
      </li>
    );
};


export default VideoListItem;
