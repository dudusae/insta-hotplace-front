import React, { Component } from 'react';
import Intro from './Intro';
import Main from './Main';
import Footer from './../components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  // query:검색창입력값,
  // submit:검색 실행 이벤트를 체크하는 표시자. submit값이 변경되면  변경되면서 데이터를 불러온다.

  constructor(props) {
    super(props);
    this.state = {
      query: '',
      submit: false,
    };
  }

  queryHandle = e => {
    this.setState({ query: e.target.value });
  };
  submitHandle = e => {
    e.preventDefault();
    this.setState({ submit: !this.state.submit });
  };

  render() {
    return (
      <div className="fullheight">
        <Router>
          <Route
            exact
            path="/"
            render={() => (
              <Intro query={this.state.query} onChange={this.queryHandle} />
            )}
          />
          <Route
            path="/search"
            render={() => (
              <Main
                query={this.state.query}
                onChange={this.queryHandle}
                onClick={this.submitHandle}
                submitCheck={this.state.submit}
              />
            )}
          />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
