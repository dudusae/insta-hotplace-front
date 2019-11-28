import React, { Component } from 'react';
import { SuggestList, SuggestBox } from './../components/header/SearchSuggest';
import Store from './../store';

class SearchSuggest extends Component {
  getSuggestList = array => {
    return array.map((list, i) => {
      return (
        <SuggestList
          name={list}
          key={i}
          onClick={e => {
            this.props.autoComplete(e, list);
          }}
        />
      );
    });
  };

  render() {
    if (this.props.blind !== ' blind') {
      return (
        <Store.Consumer>
          {store => (
            <SuggestBox
              blind={this.props.blind}
              onMouse={this.props.onMouse}
              suggestList={this.getSuggestList(store.suggestList)}
            />
          )}
        </Store.Consumer>
      );
    } else {
      return null;
    }
  }
}

export { SuggestList, SearchSuggest };
