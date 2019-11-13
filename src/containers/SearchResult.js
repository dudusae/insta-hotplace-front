import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { BoxItem, Loading } from './../components/ItemList';
import * as service from './../services/GetSearch';
import SearchResultNone from './SearchResultNone';
import { connect } from 'tls';

class SearchResult extends Component {
  // 키워드 검색결과 가져와서 state에 담기
  fetchSearch = async keyword => {
    this.setState({ fetching: true });
      const searchRequest = await service.getSearch(keyword);
      const searchList = searchRequest.data;
      this.setState({
        searchCount: searchList.length,
        searchList,
        fetching: false,
      });
  };

  constructor(props) {
    super(props);
    this.state = {
      searchCount: null,
      fetching: false,
      searchList: [],
      itemsPerPage: 12,
      loadPage: 1,
      indexStart: 0,
      keyword: this.props.keyword,
    };
  }

  // render()다음 데이터를 호출한다
  componentDidMount() {
    this.fetchSearch(this.props.match.params.query);
    window.addEventListener('scroll', this.nextPage);
  }


  // 업데이트 될 때 실행됨
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.keyword !== prevState.keyword) {
      return { keyword: nextProps.keyword };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.submitCheck!==this.props.submitCheck){
      this.fetchSearch(this.props.keyword);
    }
  }

  // 무한스크롤
  nextPage = () => {
    var { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollHeight === scrollTop + clientHeight) {
      this.setState({ loadPage: this.state.loadPage + 1 });
    }
  };

  viewDetail = (e, num) => {
    e.preventDefault();
    this.props.history.push(`/detail/${num}`);
  };

  
  render() {
    var {
      searchCount,
      searchList,
      loadPage,
      itemsPerPage,
      indexStart,
    } = this.state;
    // 검색결과 없으면 키워드 제안 페이지를 보여준다
    if (searchCount === 0) {
      return <SearchResultNone />;
    } else {
      // 검색결과가 있으면 로드한 데이터를 12개씩 보여준다
      var indexEnd = itemsPerPage * loadPage;
      var searchListSlice = searchList.slice(indexStart, indexEnd);
      var boxItems = searchListSlice.map((searchList, i) => {
        return (
          <BoxItem
            searchList={searchList}
            key={i}
            onClick={this.props.onClick}
          />
        );
      });

      return (
        <div className="main_container fullwidth">
          <main className="main search_result">
            <p className="search_count">검색결과 : {searchCount} 건</p>
            <ul className="box_container">{boxItems}</ul>
            {/* ajax로 데이터를 가져오는 동안 Loading을 보여준다 */}
            <Loading blind={this.state.fetching ? '' : 'blind'} />
          </main>
        </div>
      // <ul>
      //   <li
      //     onClick={e => {
      //       this.viewDetail(e, 1);
      //     }}
      //   >
      //     Item 1
      //   </li>
      //   <li
      //     onClick={e => {
      //       this.viewDetail(e, 2);
      //     }}
      //   >
      //     Item 2
      //   </li>
      //   <li
      //     onClick={e => {
      //       this.viewDetail(e, 3);
      //     }}
      //   >
      //     Item 3
      //   </li>
      // </ul>
    );
  }
}
}

export default withRouter(SearchResult);
