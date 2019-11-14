import React, { Component } from 'react';
import SearchField from './../components/SearchField';
import { SuggestList, SearchSuggest } from './../components/SearchSuggest';
import { withRouter } from 'react-router-dom';

class Search extends Component {
  // 검색창이 숨김처리 되었을 때 코드를 로드하지 않음
  shouldComponentUpdate(newProps) {
    if (newProps.blind !== 'blind') {
      return true;
    }
    return false;
  }

  constructor(props) {
    super(props);
    this.suggestHover = false;
    this.state = {
      inputFocus: false,
      suggestList: [
        {
          url: '?가로수길',
          name: '가로수길',
        },
        {
          url: '강남역',
          name: '강남역',
        },
        {
          url: '건대',
          name: '건대',
        },
        {
          url: '#',
          name: '경리단길',
        },
        {
          url: '#',
          name: '광화문',
        },
      ],
    };
  }

  // 검색실행시 검색창에 입력된 값을 url주소로 표시한다
  returnSearch = e => {
    e.preventDefault();
    console.log(e.target.firstChild.childNodes[2].lastChild.value);
    var keyword = e.target.firstChild.childNodes[2].lastChild.value;
    this.props.history.push(`/search/${keyword}`);
  };

  // input FocusOn일때 자동완성 키워드 목록 보이기
  suggestHandle = e => {
    if (this.suggestHover === false) {
      this.setState({ inputFocus: e.type === 'focus' ? true : false });
    }
  };

  // 자동완성 키워드 목록 mouseOn상태인지 감지
  suggestHoverListen = e => {
    this.suggestHover = e.type === 'mouseenter' ? true : false;
  };

  autoComp = (e, keyword) => {
    e.preventDefault();
    this.setState({ inputFocus: false });
    // this.props.onClickSgt(keyword);
  };

  render() {
    var suggestList = this.state.suggestList.map((list, i) => {
      return (
        <SuggestList
          name={list.name}
          key={i}
          onClick={e => {
            this.autoComp(e, list.name);
          }}
        />
      );
    });

    return (
      <div className="search">
        <form
          className={this.props.blind}
          onSubmit={this.returnSearch}
          method="get"
          autoComplete="off"
        >
          <SearchField
            query={this.props.query}
            onChange={this.props.onChange}
            inputClear={this.props.inputClear}
            onFocus={this.suggestHandle}
          />
          <SearchSuggest
            blind={this.state.inputFocus ? '' : ' blind'}
            list={suggestList}
            onMouse={this.suggestHoverListen}
          />
        </form>
      </div>
    );
  }
}
export default withRouter(Search);
