import React, { Component } from 'react';
import Intro from './Intro';
import Main from './Main';
import Footer from './../components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="fullheight">
        <Router>
          <Route exact path="/" component={Intro}/>
          <Route path="/search/" component={Main}/>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
