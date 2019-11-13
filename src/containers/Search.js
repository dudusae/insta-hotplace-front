import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

class Search extends Component {
  returnSearch = (e)=> {
    e.preventDefault();
    var keyword = e.target.childNodes[0].value;
    this.props.history.push(`/search/${keyword}`);
  }

  render() {
    return (
      <div>
        <form style={this.props.blind} onSubmit={this.returnSearch}>
          <input
            type="text"
            value={this.props.query}
            onChange={this.props.onChange}
          />
          <button type="submit" onClick={this.props.onClick}>Submit</button>
        </form>
      </div>
    );
  }
}
export default withRouter(Search);
