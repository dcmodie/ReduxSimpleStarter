import React from 'react';

const VideoListItem = (props) => {
  const title = props.video.snippet.title
  const thumb = props.video.snippet.thumbnails.default.url
  console.log ("thumb")
  console.log (thumb)
  return     <li><img src={thumb} />{title}</li>
};

export default VideoListItem;
