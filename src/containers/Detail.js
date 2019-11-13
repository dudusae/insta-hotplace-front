import React, { Component } from 'react';
import { RelatedBoxItem, Loading, InstaBoxItem } from './../components/BoxItems';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchList: [
        {
          rank: 1,
          name: '고에몬 강남점',
          backgroundImage: '/images/sample_image.jpg',
        },
        {
          rank: 2,
          name: '고에몬 강남점',
          backgroundImage: '/images/sample_image.jpg',
        },
        {
          rank: 3,
          name: '고에몬 강남점',
          backgroundImage: '/images/sample_image.jpg',
        },
        {
          rank: 4,
          name: '고에몬 강남점',
          backgroundImage: '/images/sample_image.jpg',
        },
        {
          rank: 5,
          name: '고에몬 강남점',
          backgroundImage: '/images/sample_image.jpg',
        },
        {
          rank: 6,
          name: '고에몬 강남점',
          backgroundImage: '/images/sample_image.jpg',
        },
        {
          rank: 7,
          name: '고에몬 강남점',
          backgroundImage: '/images/sample_image.jpg',
        },
        {
          rank: 8,
          name: '고에몬 강남점',
          backgroundImage: '/images/sample_image.jpg',
        },
        {
          rank: 9,
          name: '고에몬 강남점',
          backgroundImage: '/images/sample_image.jpg',
        },
        {
          rank: 10,
          name: '고에몬 강남점',
          backgroundImage: '/images/sample_image.jpg',
        },
        {
          rank: 11,
          name: '고에몬 강남점',
          backgroundImage: '/images/sample_image.jpg',
        },
      ],

      instaList: [
        {
          id: '@yeezy',
          tags:
            '#평내호평맛집#남양주맛집#호평동맛집#동태탕#먹스타그램#맛스타그램#먹스타그램#맛집#맛집스타그램#먹스타소통',
          backgroundImage: '/images/sample_image.jpg',
          link: 'https://www.naver.com/',
        },
        {
          id: '@yeezy',
          tags:
            '#평내호평맛집#남양주맛집#호평동맛집#동태탕#먹스타그램#맛스타그램#먹스타그램#맛집#맛집스타그램#먹스타소통#맛집#맛집스타그램#먹스타소통',
          backgroundImage: '/images/sample_image.jpg',
          link: 'https://www.naver.com/',
        },
        {
          id: '@yeezy',
          tags:
            '#평내호평맛집#남양주맛집#호평동맛집#동태탕#먹스타그램#맛스타그램#먹스타그램#맛집#맛집스타그램#먹스타소통맛집#맛집스타그램#먹스타소통',
          backgroundImage: '/images/sample_image.jpg',
          link: 'https://www.naver.com/',
        },
        {
          id: '@yeezy',
          tags:
            '#평내호평맛집#남양주맛집#호평동맛집#동태탕#먹스타그램#맛스타그램#먹스타그램#맛집#맛집스타그램#먹스타소통맛집#맛집스타그램#먹스타소통',
          backgroundImage: '/images/sample_image.jpg',
          link: 'https://www.naver.com/',
        },
        {
          id: '@yeezy',
          tags:
            '#평내호평맛집#남양주맛집#호평동맛집#동태탕#먹스타그램#맛스타그램#먹스타그램#맛집#맛집스타그램#먹스타소통',
          backgroundImage: '/images/sample_image.jpg',
          link: 'https://www.naver.com/',
        },
        {
          id: '@yeezy',
          tags:
            '#평내호평맛집#남양주맛집#호평동맛집#동태탕#먹스타그램#맛스타그램#먹스타그램#맛집#맛집스타그램#먹스타소통',
          backgroundImage: '/images/sample_image.jpg',
          link: 'https://www.naver.com/',
        },
        {
          id: '@yeezy',
          tags:
            '#평내호평맛집#남양주맛집#호평동맛집#동태탕#먹스타그램#맛스타그램#먹스타그램#맛집#맛집스타그램#먹스타소통',
          backgroundImage: '/images/sample_image.jpg',
          link: 'https://www.naver.com/',
        },
        {
          id: '@yeezy',
          tags:
            '#평내호평맛집#남양주맛집#호평동맛집#동태탕#먹스타그램#맛스타그램#먹스타그램#맛집#맛집스타그램#먹스타소통',
          backgroundImage: '/images/sample_image.jpg',
          link: 'https://www.naver.com/',
        },
        {
          id: '@yeezy',
          tags:
            '#평내호평맛집#남양주맛집#호평동맛집#동태탕#먹스타그램#맛스타그램#먹스타그램#맛집#맛집스타그램#먹스타소통',
          backgroundImage: '/images/sample_image.jpg',
          link: 'https://www.naver.com/',
        },
        {
          id: '@yeezy',
          tags:
            '#평내호평맛집#남양주맛집#호평동맛집#동태탕#먹스타그램#맛스타그램#먹스타그램#맛집#맛집스타그램#먹스타소통',
          backgroundImage: '/images/sample_image.jpg',
          link: 'https://www.naver.com/',
        },
        {
          id: '@yeezy',
          tags:
            '#평내호평맛집#남양주맛집#호평동맛집#동태탕#먹스타그램#맛스타그램#먹스타그램#맛집#맛집스타그램#먹스타소통',
          backgroundImage: '/images/sample_image.jpg',
          link: 'https://www.naver.com/',
        },
        {
          id: '@yeezy',
          tags:
            '#평내호평맛집#남양주맛집#호평동맛집#동태탕#먹스타그램#맛스타그램#먹스타그램#맛집#맛집스타그램#먹스타소통',
          backgroundImage: '/images/sample_image.jpg',
          link: 'https://www.naver.com/',
        },
      ],
    };
  }

  render() {
    var relatedBoxItems = this.state.searchList.map((searchList, i) => {
      return (
        <RelatedBoxItem
          rank={searchList.rank}
          name={searchList.name}
          backgroundImage={searchList.backgroundImage}
          key={i}
          onClick={this.props.onClick}
        />
      );
    });

    var instaBoxItems = this.state.instaList.map((instaList, i) => {
      return (
        <InstaBoxItem
          id={instaList.id}
          backgroundImage={instaList.backgroundImage}
          tags={instaList.tags}
          key={i}
          link={instaList.link}
        />
      );
    });

    return (
      <div className="main_container fullwidth">
        <main className="main">
          <h2 className="goto_list">
            <a href="/#">강남역 맛집 검색결과</a>
          </h2>
          <div className="related_box_container">
            <button className="related_prv">
              <span className="blind">이전</span>
            </button>
            <div className="related_box_list_wrap">
              <ul className="related_box_list">{relatedBoxItems}</ul>
            </div>
            <button className="related_nxt">
              <span className="blind">다음</span>
            </button>
          </div>
          <h1 className="detail_title">쌍둥이네 해물식당</h1>
          <div className="deatil">
            <div className="detail_map"></div>
            <div className="detail_desc">
              <p className="detail_txt">
                송도칼국수와 꼬막비빔밥이 맛있는 송도유원지맛집
              </p>
              <a className="detail_map_link key_color" href="/#">
                <p className="detail_txt map_ico">네이버 지도에서 보기</p>
              </a>
            </div>
          </div>

          <h2 className="insta_count">인스타그램 검색결과 : 200건</h2>
          <ul className="box_container">{instaBoxItems}</ul>
          <Loading />
        </main>
      </div>
    );
  }
}

export default Detail;
