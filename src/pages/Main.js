import React from 'react';
import SearchResult from './../containers/SearchResult';
import SearchResultNone from './../containers/SearchResultNone';
import Detail from './../containers/Detail';
import { Route, BrowserRouter as Router} from 'react-router-dom';

function Main() {
  return (
    <Router>
      <Route exact path="/search/:query" component={SearchResult} />
      <Route exact path="/search/:query/sorry" component={SearchResultNone} />
      <Route exact path="/search/:query/:name" component={Detail} />
    </Router>
  );
}

export default Main;
