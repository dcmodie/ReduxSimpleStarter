import React from 'react';
import VideoListItem from './video_list_item';
const VideoList = (props) => {
    console.log ("vid list called")
    console.log (props.videos)

    const videoItems = props.videos.map ((video =>{
      return (

        <VideoListItem
        key = {video.etag}
        video= {video}
        onVideoSelect = {props.onVideoSelect}/>
    );
    }))
  //  const videos = props.videos;

  //  console.log ("len " + props.videos.length)
    //const videoItems = props.video.map((video) => {
    //    return <VideoListItem video = {video} />
    //})
    return (
      <ul className="col-md-4 list-group">
      {videoItems}
      </ul>
    );

};

export default VideoList;
