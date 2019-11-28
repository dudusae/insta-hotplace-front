import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import box_bg from './../asset/images/box-item-bg.png';
import insta_box_bg from './../asset/images/instabox-item-bg.png';

function BoxItem({ onClick, img_urls, rank, num_of_posts, name, desc, onError }) {
  return (
    <li className="box_item">
      <a href="http://#" onClick={onClick}>
        <div
          className="box_img"
          style={{ backgroundImage: `${img_urls}, url(${box_bg})` }}
        >
          <div className="box_img_overlay"></div>
          <div className="box_rank key_color_bg">
            <span className="box_rank_num">{rank}등</span>
          </div>
          <div className="box_insta_count">
            <p className="box_insta_count_txt">{num_of_posts}</p>
          </div>
        </div>
        <div className="box_txt">
          <h2 className="box_title">{name}</h2>
          <p className="box_desc">{desc}</p>
        </div>
      </a>
    </li>
  );
}

function RelatedBoxItem({ onClick, img_urls, rank, name }) {
  return (
    <li className="related_box_item">
      <a href="/#" onClick={onClick}>
        <div
          className="related_box_img"
          style={{ backgroundImage: `url(${img_urls})` }}
        >
          <div className="related_box_rank">
            <span className="related_box_rank_num">{rank}</span>
          </div>
        </div>
        <div className="related_box_txt">
          <h3 className="related_box_title key_color">
            <LinesEllipsis
              text={name}
              maxLine="1"
              ellipsis="..."
              trimRight
              basedOn="letters"
            />
          </h3>
        </div>
      </a>
    </li>
  );
}

function InstaBoxItem({ link, img_urls, tags }) {
  return (
    <li className="box_item insta_box_item">
      <a href={link} target="_insta">
        <div
          className="insta_box_img"
          style={{ backgroundImage: `${img_urls}, url(${insta_box_bg})` }}
        ></div>
        <div className="insta_box_txt">
          <LinesEllipsis className="insta_box_tags" text={tags} maxLine="6" ellipsis="..." trimRight basedOn="letters"/>
        </div>
      </a>
    </li>
  );
}

function Loading({ blind }) {
  return (
    <div className={'loading ' + blind}>
      <span className="loading_ico" />
    </div>
  );
}

export { BoxItem, Loading, RelatedBoxItem, InstaBoxItem };
