import React, { Component } from 'react';
import SearchField from './../components/header/SearchField';
import { SearchSuggest } from './SearchSuggest';
import { withRouter } from 'react-router-dom';

class Search extends Component {
  constructor(props) {
    super(props);
    this.suggestHover = false;
    this.state = {
      inputFocus: false,
    };
  }

  returnSearch = (e, keyword) => {
    if (!keyword) {
      keyword = e.target.firstChild.childNodes[2].lastChild.value;
    }
    e.preventDefault();
    this.suggestHover = (e.type === 'mouseenter' ? true : false)
    this.props.history.push(`/search/${keyword}`);
    this.setState({ inputFocus: false });
  };

  suggestHandle = e => {
    if (this.suggestHover === false) {
      this.setState({ inputFocus: e.type === 'focus' ? true : false });
    }
  };

  suggestHoverListen = e => {
    this.suggestHover = (e.type === 'mouseenter' ? true : false)
  };

  render() {
    if (this.props.blind !== 'blind') {
      const { blind, queryURI } = this.props;
      return (
        <div className={'search ' + blind}>
          <form onSubmit={this.returnSearch} method="get" autoComplete="off">
            <SearchField
              queryURI={queryURI}
              onFocus={this.suggestHandle}
            />
            <SearchSuggest
              blind={this.state.inputFocus ? '' : ' blind'}
              autoComplete={this.returnSearch}
              onMouse={this.suggestHoverListen}
            />
          </form>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default withRouter(Search);
