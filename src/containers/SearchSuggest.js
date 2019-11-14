import React, {Component} from 'react';
import { GetSuggestList } from './../services/GetData';
import { SuggestList, SuggestBox } from './../components/search/SearchSuggest';

class SearchSuggest extends Component {

  fetchSearch = async () => {
    this.setState({ fetching: true });
      const sgtListRequest = await GetSuggestList();
      const suggestList = sgtListRequest.data;
      this.setState({
        suggestList,
        fetching: false,
      });
    }

  constructor(props) {
    super(props);
    this.state = {
      fetching: false,
      suggestList: []
    };
  }

  componentDidMount() {
    this.fetchSearch();
  }

  render(){
      var suggestList = this.state.suggestList.map((list, i) => {
      return (
        <SuggestList
          name={list.name}
          key={i}
          onClick={e => {
            this.props.autoComp(e, list.name);
          }}
        />
      );
    });
  return (
    <SuggestBox blind={this.props.blind}  onMouse={this.props.onMouse} suggestList={suggestList}/>
  );
}
}

export { SuggestList, SearchSuggest };
