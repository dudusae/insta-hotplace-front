import React, { Component } from 'react';
import { GetSuggestList } from './../services/GetData';
import { SuggestList, SuggestBox } from './../components/header/SearchSuggest';

class SearchSuggest extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.blind !== this.props.blind || nextState.fetching !== this.state.fetching);
  }

  constructor(props) {
    super(props);
    // this.fetching = false;
    this.state = {
      fetching: false,
      suggestList: [],
    };
  }

  fetchSearch = async () => {
    this.setState({ fetching: true });
    // this.fetching = true;
    const sgtListRequest = await GetSuggestList();
    const suggestList = sgtListRequest.data;
    this.setState({
      suggestList,
      fetching: false,
    });
    // this.fetching = false;
  };

  render() {
    if (this.props.blind !== ' blind') {
      console.log('render (Suggest)');
      var suggestList = this.state.suggestList.map((list, i) => {
        return (
          <SuggestList
            name={list}
            key={i}
            onClick={e => {
              this.props.autoComp(e, list);
            }}
          />
        );
      });
      return (
        <SuggestBox
          blind={this.props.blind}
          onMouse={this.props.onMouse}
          suggestList={suggestList}
        />
      );
    } else {
      return null;
    }
  }

  componentDidMount() {
    console.log('componentDidMount(SearchSuggest)');
    this.fetchSearch();
  }
}

export { SuggestList, SearchSuggest };
