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
          onClick={this.props.onClick}
        />
      </div>
    );
  }
}

export default Header;
