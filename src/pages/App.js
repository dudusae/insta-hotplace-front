import React, { Component } from 'react';
import Intro from './Intro';
import Main from './Main';
import Footer from './../components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  // query:검색창입력값,
  // querySubmit:검색 실행 이벤트를 체크하는 표시자.
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      querySubmit: false,
    };
  }

  // 검색창에 입력한 값을 표시
  queryHandle = e => {this.setState({ query: e.target.value });};

  // 검색창에 입력한 값 지우기
  queryClearHandle = () => {this.setState({ query: '' });};

  // 검색실행시 표시자 변경(데이터 로드 트리거)
  querySubmitHandle = e => {
    e.preventDefault();
    this.setState({ querySubmit: !this.state.querySubmit });
  };

  render() {
    return (
      <div className="fullheight">
        <Router>
          <Route exact path="/" render={() => (
                                        <Intro
                                          query={this.state.query}
                                          onChange={this.queryHandle}
                                          inputClear={this.queryClearHandle}
                                        />
            )}
          />
          <Route path="/search" render={() => (
                                        <Main
                                          query={this.state.query}
                                          onChange={this.queryHandle}
                                          querySubmit={this.querySubmitHandle}
                                          querySubmitState={this.state.querySubmit}
                                          inputClear={this.queryClearHandle}
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
