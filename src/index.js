import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCeVnCFcPcECUGSfdfDuRfcAbtaOCUT6Vc';
//APIKey = AIzaSyCeVnCFcPcECUGSfdfDuRfcAbtaOCUT6Vc
const App =  () =>{
    return (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector(".container"));