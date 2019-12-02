import React, { Component } from 'react';
import {
  Loading,
  InstaBoxItem,
  // RelatedBoxItem,
} from './../components/BoxItems';
import { withRouter, Redirect } from 'react-router-dom';
import Header from './Header';
import Store from './../store';
import { GetSearch } from './../services/GetData';
import box_bg from './../asset/images/box-item-bg.png';

class Detail extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      fetching: false,
      hasError: false,
      itemsPerPage: 12,
      loadPage: 1,
      indexStart: 0,
    };
  }

  // Get Search Result Data (if direct URI request)
  fetchSearch = async keyword => {
    if (this._ismounted === true) {
      this.setState({ fetching: true });
      try {
        const searchRequest = await GetSearch(keyword);
        const searchList = searchRequest.data.venues;
        this.setState({
          fetching: false,
        });
        // Set Data on Store
        this.context.fetchSearchState(searchList, searchList.length);
      } catch (e) {
        this.setState({
          fetching: false,
          hasError: true,
        });
      } finally {
        this.setState({ hasError: false });
      }
    }
  };

  // Infinite scroll
  viewNextPage = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollHeight === scrollTop + clientHeight) {
      this.setState({ loadPage: this.state.loadPage + 1 });
    }
  };

  render() {
    const {
      fetching,
      hasError,
      itemsPerPage,
      loadPage,
      indexStart,
    } = this.state;
    const { searchList } = this.context;
    const name = this.props.match.params.name;
    const index = searchList.findIndex(i => i.name === name);
    if (hasError) {
      return <Redirect to={`/search/${this.props.match.params.query}/sorry`} />;
    } else if (searchList[index]) {
      const venueData = searchList[index];
      const venueDetail = venueData.detail;
      var venuePosts = venueData.posts;

      // // Remove duplicated posts
      // const UniqueKeys = [
      //   ...new Set(venuePosts.map(venuePosts => venuePosts.key)),
      // ];
      // var tempVenuePosts = [];
      // for (var i in UniqueKeys) {
      //   var uniqueIndex = venuePosts.findIndex(
      //     idx => idx.key === UniqueKeys[i]
      //   );
      //   tempVenuePosts.push(venuePosts[uniqueIndex]);
      // }
      // venuePosts = tempVenuePosts;

      // Pagenation
      const indexEnd = itemsPerPage * loadPage;
      const venuePostsSlice = venuePosts.slice(indexStart, indexEnd);

      const instaBoxItems = venuePostsSlice.map((venuePosts, i) => {
        // Hashtags : Add '#' and Remove a same tag as venue's name
        const tags = venuePosts.hashtags.map(hashtags => '#' + hashtags + ' ');
        const tagIdx = tags.indexOf('#' + venueData.name + ' ');
        if (tagIdx > -1) {
          tags.splice(tagIdx, 1);
        }

        // InstaImage
        const insta_img_urls = venuePosts.img_urls.map(
          img_urls => 'url(' + img_urls + ')',
        );

        return (
          <InstaBoxItem
            img_urls={insta_img_urls}
            tags={tags}
            key={i}
            link={venuePosts.key}
          />
        );
      });

      // console.log ('야'+instaBoxItems[0].props);
      // const instaBoxItemsUnique = [...new Set(instaBoxItems)];

      // const itemsPerPageLV = 9;
      // const indexEndLV = itemsPerPageLV + index;
      // const relatedSlice = searchList.slice(index, indexEndLV);

      // const relatedBoxItems = relatedSlice.map((searchList, i) => {
      //   const img_urls = searchList.posts[0].img_urls.map(
      //     img_urls => 'url(' + img_urls + ')',
      //   );
      //   return (
      //     <RelatedBoxItem
      //       rank={searchList.rank}
      //       name={searchList.name}
      //       img_urls={img_urls}
      //       key={i}
      //       onClick={e => {
      //         this.viewDetail(e, searchList.name);
      //       }}
      //     />
      //   );
      // });

      const img_urls = venuePosts[0].img_urls.map(
        img_urls => 'url(' + img_urls + ')',
      );

      return (
        <div>
          <Header queryURI={this.props.match.params.query} />
          <div className="main_container fullwidth">
            <main className="main">
              {/* <div className="related_box_container">
                <button className="related_prv">
                  <span className="blind">이전</span>
                </button>
                <div className="related_box_list_wrap">
                  <ul className="related_box_list">
                    {relatedBoxItems}
                  </ul>
                </div>
                <button className="related_nxt">
                  <span className="blind">다음</span>
                </button>
              </div> */}
              <h1 className="detail_title">{venueData.name}</h1>
              <div className="deatil">
                <div
                  className="detail_map"
                  style={{ backgroundImage: `${img_urls}, url(${box_bg})` }}
                ></div>
                <div className="detail_desc">
                  <p className="detail_txt">{venueDetail.description}</p>
                  <a
                    className="detail_map_link key_color"
                    href={venueDetail.url_naver_map}
                    target="_naver"
                  >
                    <p className="detail_txt map_ico">네이버 지도에서 보기</p>
                  </a>
                </div>
              </div>
              <h2 className="insta_count">
                인스타그램 검색결과 : {venuePosts.length}건
              </h2>
              <ul className="box_container">{instaBoxItems}</ul>
              <Loading blind={fetching ? '' : 'blind'} />
            </main>
          </div>
        </div>
      );
    } else return null;
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    const queryStore = this.context.searchList[0].detail.area_name;
    const queryURI = this.props.match.params.query;
    if (queryStore !== queryURI) {
      this._ismounted = true;
      this.fetchSearch(queryURI);
    }
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

Detail.contextType = Store;
export default withRouter(Detail);
