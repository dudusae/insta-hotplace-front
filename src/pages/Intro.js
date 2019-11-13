import React, { Component } from 'react';
import Header from './../components/Header';
import Search from './../containers/Search';

class Intro extends Component {
  render() {
    return (
      <div>
        <Header blind={{display:'none'}}/>
        <div><h1>Intro</h1></div>
        <Search query={this.props.query}
            onChange={this.props.onChange}/>
      </div>
    );
  }
}

export default Intro;
