import React from 'react';
import Header from './../containers/Header';
import SearchResult from './../containers/SearchResult';
import SearchResultNone from './../containers/SearchResultNone';
import Detail from './../containers/Detail';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function Main(props) {
  return (
    <Router>
      <Header
        query={props.query}
        onChange={props.onChange}
        inputClear={props.inputClear}
      />
      <Route path="/search/:query" render={() => (
                                          <SearchResult
                                              keyword={props.query}/>
        )}
      />
      <Route path="/sorry" component={SearchResultNone} />
      <Route path="/detail" component={Detail} />
    </Router>
  );
}

export default Main;
