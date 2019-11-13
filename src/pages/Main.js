import React, { Component } from 'react';
import Header from './../components/Header';
import SearchResult from './../containers/SearchResult';
import Detail from './../containers/Detail';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <Router>
        <Header
          blind={this.props.blind}
          query={this.props.query}
          onChange={this.props.onChange}
          onClick={this.props.onClick}
        />
        <Route path="/search/:query" render={()=>(<SearchResult keyword={this.props.query} submitCheck={this.props.submitCheck}/>)} />
        <Route path="/detail" component={Detail} />
      </Router>
    );
  }
}

export default Main;

// export default Main;
