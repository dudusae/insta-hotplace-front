import React from 'react';
import Header from './../components/Header';
import SearchResult from './../containers/SearchResult';
import Detail from './../containers/Detail';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function Main(props) {
  return (
    <Router>
      <Header
        query={props.query}
        onChange={props.onChange}
        onClick={props.onClick}
      />
      <Route
        path="/search/:query"
        render={() => (
          <SearchResult keyword={props.query} submitCheck={props.submitCheck} />
        )}
      />
      <Route path="/detail" component={Detail} />
    </Router>
  );
}

export default Main;

// export default Main;
