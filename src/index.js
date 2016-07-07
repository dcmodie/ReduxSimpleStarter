import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
//import VideoDetail from '/components/video_detail';


const API_KEY = 'AIzaSyCeVnCFcPcECUGSfdfDuRfcAbtaOCUT6Vc';

// YTSearch ({key: API_KEY, term: 'surfboards'}, function (data){
//   console.log ("yt search 0")
//     console.log (data)
//     console.log (data.length)
//
// })

class App extends Component {
    constructor (props){
        super (props);
        //persistent
        this.state =
          { videos: [],
            selectedVideo: undefined
          };
        YTSearch ({key: API_KEY, term: 'baseball'},  (data) =>{
          console.log ("yt search 1")
          console.log (data.length)

           // console.log (data)
          //  this.setState({videos});
            // use setter, tells react that state has changed,
            // and it will re-render
            this.setState({
              videos: data,
              selectedVideo: data[0]});
        });
        this.videoSelected = function videoSelected(){

        }
    };


    render(){
        console.log ("render in app called")
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
                videos={this.state.videos}/>
            </div>
        );
    }
}
App.test = function (event){
  console.log("hellko")
}
//               <VideoList videos={this.state.videos} />

//const App =  () =>{
//    return (
//        <div>
//            <SearchBar />
//        </div>
//    );
//}

export default App;

ReactDOM.render(<App />, document.querySelector(".container"));
