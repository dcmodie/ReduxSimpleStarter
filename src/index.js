import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list';


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
        this.state = {videos: []};
        YTSearch ({key: API_KEY, term: 'baseball'},  (data) =>{
          console.log ("yt search 1")
          console.log (data.length)

           // console.log (data)
          //  this.setState({videos});
            // use setter, tells react that state has changed,
            // and it will re-render
            this.setState({videos: data});
        });
    };

    render(){
        console.log ("render in app called")
        return (
            <div>
                <SearchBar />
                <VideoList  videos={this.state.videos}/>
            </div>
        );
    }
}
//               <VideoList videos={this.state.videos} />

//const App =  () =>{
//    return (
//        <div>
//            <SearchBar />
//        </div>
//    );
//}

ReactDOM.render(<App />, document.querySelector(".container"));
