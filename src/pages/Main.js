import React from 'react';
import SearchResult from './../containers/SearchResult';
import SearchResultNone from './../containers/SearchResultNone';
import Detail from './../containers/Detail';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

function Main() {
  console.log('Main');
  return (
    <Router>
      <Switch>
        <Route exact path="/search/:query" component={SearchResult} />
        <Route exact path="/search/:query/sorry" component={SearchResultNone} />
        <Route exact path="/search/:query/:name" component={Detail} />
      </Switch>
    </Router>
  );
}

export default Main;
