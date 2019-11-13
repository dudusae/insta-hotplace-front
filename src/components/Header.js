import React, { Component } from 'react';
import Search from './../containers/Search';

class Header extends Component {
  render() {
    return (
      <div>
        <a href="/"><span>Header</span></a>
        <Search
          blind={this.props.blind}
          query={this.props.query}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default Header;
