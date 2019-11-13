import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SearchResult extends Component {
  viewDetail = (e, num) => {
    e.preventDefault();
    this.props.history.push(`/detail/${num}`);
  };
  render() {
    return (
      <ul>
        <li
          onClick={e => {
            this.viewDetail(e, 1);
          }}
        >
          Item 1
        </li>
        <li
          onClick={e => {
            this.viewDetail(e, 2);
          }}
        >
          Item 2
        </li>
        <li
          onClick={e => {
            this.viewDetail(e, 3);
          }}
        >
          Item 3
        </li>
      </ul>
    );
  }
}

export default withRouter(SearchResult);
