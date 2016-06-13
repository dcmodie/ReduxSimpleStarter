import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyCeVnCFcPcECUGSfdfDuRfcAbtaOCUT6Vc';

YTSearch ({key: API_KEY, term: 'surfboards'}, function (data){
    console.log (data)
})
//APIKey = AIzaSyCeVnCFcPcECUGSfdfDuRfcAbtaOCUT6Vc

class App extends Component {
    constructor (props){
        super (props);
        YTSearch ({key: API_KEY, term: 'surfboards'},  (videos) =>{
           // console.log (data)
            this.setState({videos});
        });

        this.state = {videos: []};
    };

    render(){
        return (
            <div>
                <SearchBar />
                <VideoList videos= {this.state.videos}/>

            </div>
        );
    }
}
//const App =  () =>{
//    return (
//        <div>
//            <SearchBar />
//        </div>
//    );
//}

ReactDOM.render(<App />, document.querySelector(".container"));