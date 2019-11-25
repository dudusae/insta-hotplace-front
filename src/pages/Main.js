import React from 'react';
import Header from './../containers/Header';
import SearchResult from './../containers/SearchResult';
import SearchResultNone from './../containers/SearchResultNone';
import Detail from './../containers/Detail';
import { Route, BrowserRouter as Router} from 'react-router-dom';

function Main({ query, onChange, inputClear, pushQueryToInput}) {
  // console.log('쿼리를알수 있나'+match.params.query)
  return (
    <Router>
      {/* <Header
        query={query}
        onChange={onChange}
        inputClear={inputClear}
        pushQueryToInput={pushQueryToInput}
      /> */}
      <Route exact path="/search/:query" render={() => ( <SearchResult/> )}
      />
      <Route exact path="/search/:query/sorry" render={() => ( <SearchResultNone
                                                     pushQueryToInput={pushQueryToInput}/>)} />
      <Route exact path="/search/:query/:name" component={Detail} />
    </Router>
  );
}

export default Main;
