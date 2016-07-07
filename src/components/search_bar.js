import React, { Component } from 'react';
class SearchBar extends Component {
    constructor(props){
        super(props);

        console.log ('on change in search ' + props.onChange)

        this.state = { term:''}
        this.onChange = this.props.onSearchTermChange
    }
    render (){
      return (
          <div className="search-bar" >
            <input
                value = {this.state.term}
                onChange = { event=> this.onInputChange(event.target.value)}
                />

          </div>

      );
    }

    onInputChange(term){
//      this.props.onSearchTermChange(term);
      this.onChange(term);
      this.setState({term: term});

    }
    //
    //
    //onInputChange(event){
    //    console.log ("event " + event)
    ////    this.setState ({term: event.target.value})
    ////    console.log (event.target.value)
    //}

}

export default SearchBar
