import React, { Component } from 'react';
import Intro from './Intro';
import Main from './Main';
import Footer from './../components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      submit: false,
    };
  }

  queryHandle = e => {
    console.log(e.target.value);
    this.setState({ query: e.target.value });
    console.log(this.state.query);
  };
  submitHandle = () => {
    this.setState({ submit: !this.state.submit });
  }

  render() {
    return (
      <div>
        <Router>
          <Route
            exact
            path="/"
            render={() => (
              <Intro
                blind={this.props.blind}
                query={this.state.query}
                onChange={this.queryHandle}
              />
            )}
          />
          <Route
            path="/search"
            render={() => (
              <Main
                blind={this.props.blind}
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
