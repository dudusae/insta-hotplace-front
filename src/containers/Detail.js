import React, { Component } from 'react';
import { Loading, InstaBoxItem } from './../components/BoxItems';
import { GetSearch, } from './../services/GetData';

class Detail extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      fetching: false,
      hasError: false,
      searchCount: null,
      searchList: [],
      venueData: [],
      venueDetail: [],
      instaList:[],
      itemsPerPage: 12,
      loadPage: 1,
      indexStart: 0,
      data: null,
    };
  }

  // Get Search Result Data
  fetchSearch = async (keyword, name) => {
    if (this._ismounted === true) {
      this.setState({ fetching: true });
      try {
        const searchRequest = await GetSearch(keyword);
        const searchList = searchRequest.data.venues;
        const index = searchList.findIndex(i => i.name === name);
        var venueData = [];
        venueData= searchList[index];
        // console.log(venueData.detail.description);
        
        this.setState({
          searchCount: searchList.length,
          searchList,
          venueData,
          venueDetail: venueData.detail,
          instaList: venueData.posts,
          instaImg: venueData.posts.img_urls,
          fetching: false,
        });
      } catch (e) {
        console.log(e);
        this.setState({
          fetching: false,
          hasError: true,
        });
      } finally {
        this.setState({ hasError: false });
      }
    }
  };

  // nextPage = () => {
  //   var { scrollHeight, scrollTop, clientHeight } = document.documentElement;
  //   if (scrollHeight === scrollTop + clientHeight) {
  //     this.setState({ loadPage: this.state.loadPage + 1 });
  //   }
  // };


  render() {

    var {venueData, venueDetail, instaList, fetching} = this.state;
    console.log(venueDetail.description);
    // console.log(instaList.img_urls[0]);
    // var relatedBoxItems = this.state.searchList.map((searchList, i) => {
    //   return (
    //     <RelatedBoxItem
    //       rank={searchList.rank}
    //       name={searchList.name}
    //       backgroundImage={searchList.backgroundImage}
    //       key={i}
    //       onClick={this.props.onClick}
    //     />
    //   );
    // });

    var instaBoxItems = instaList.map((instaList, i) => {

      var tags = instaList.hashtags.map((hashtags) => '#' + hashtags + ' ');

      return (
        <InstaBoxItem
          img_urls={instaList.img_urls[0]}
          tags={tags}
          key={i}
          link={instaList.key}
        />
      );
    });

    return (
      <div className="main_container fullwidth">
        <main className="main">
          {/* <div className="related_box_container">
            <button className="related_prv">
              <span className="blind">이전</span>
            </button>
            <div className="related_box_list_wrap">
              <ul className="related_box_list">{relatedBoxItems}</ul>
            </div>
            <button className="related_nxt">
              <span className="blind">다음</span>
            </button>
          </div> */}
          <h1 className="detail_title">{venueData.name}</h1>
          <div className="deatil">
            <div className="detail_map"></div>
            <div className="detail_desc">
              <p className="detail_txt">
                {venueDetail.description}
              </p>
              <a className="detail_map_link key_color" href="/#">
                <p className="detail_txt map_ico">네이버 지도에서 보기</p>
              </a>
            </div>
          </div>
          <h2 className="insta_count">인스타그램 검색결과 : {instaList.length}건</h2>
          <ul className="box_container">{instaBoxItems}</ul>
          <Loading blind={fetching ? '' : 'blind'} />
        </main>
      </div>
    );
  }

  componentDidMount() {
    this._ismounted = true;
    this.fetchSearch(this.props.match.params.query, this.props.match.params.name);
    window.addEventListener('scroll', this.viewNextPage);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.query !== this.props.match.params.query) {
      this.fetchSearch(this.props.match.params.query);
    }
  }

  componentWillUnmount() {
    this._ismounted = false;
  }
}

export default Detail;
