import React from 'react';
import MetaTags from 'react-meta-tags';
import Slider from 'react-slick';

import Footer from './Footer.js';
import { CollapsibleText } from '../components/CollapsibleText';
import { MysteryBox } from '../components/MysteryBox';

import { Review } from '../components/Review';
import { Rating } from '../components/Rating';

const PremiumProductPreview = ({ openedBoxItemInfo: info, userID, switchModal }) => {
  return (
    <div className="item_preview">
      {info && (
        <MetaTags>
          <title>{info.name} | Hybe.com</title>
          <meta
            property="og:description"
            content="Open Mystery Boxes from earth's leading Mystery Box Platform. Hybe lets you get authentic products from brands like Supreme and Gucci for up to 95% off."
          />
          <meta
            property="og:title"
            content={info.name + ' | Hybe.com'}
          />
        </MetaTags>
      )}
      <div className="item_preview_header">
        <div className="premium_product wave">
          <div className="premium_product_img">
            <img src={info?.itemImage} width="100%" alt="" />
          </div>
          <div className="premium_product_desc">
            <h2 className="title_main">{info?.name}</h2>
            <p className="body_main op_75">
              <CollapsibleText
                value={info?.description || 'No description for this item'}
              />
            </p>
            <div className="premium_product_hr" />

            <div className="premium_product__details">
              <div className="label_main">{info?.premiumItem?.productDetails}</div>
              <p className="body_main op_75">{info?.premiumItem?.productMaterials.join(', ')}.</p>
            </div>

            <div className="premium_product__buy">
              <button className="btn_main" onClick={() => switchModal('piupiu')}>
                <span>Buy with 🔥 {info?.premiumItem?.firePointsPrice}</span>
              </button>
              <Rating stars={5} points={info?.premiumItem?.rating} className="star_main" />
            </div>
          </div>
        </div>
        <div className="reviews__container">
          <h2 className="title_main reviews__title">Reviews 🤟</h2>
          <div className="main_slider">
            <Slider {...settings}>
              {info?.premiumItem?.reviews.map((review, index) => (
                <Review key={index} data={review} />
              ))}
            </Slider>
          </div>
        </div>
        <Feature features={info?.premiumItem?.features} />
        <div className="premium_product__boxes">
          {info?.name && (
            <h3 className="title_main item_preview__subtitle">
              Find {info.name} in the following boxes:
            </h3>
          )}
          {Array.isArray(info?.boxList) && (
            <div className="main_items">
              <div className="main_itemholder">
                {info.boxList.map((box) => (
                  <MysteryBox key={box.id} data={box} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer userID={userID} />
    </div>
  );
};

export default PremiumProductPreview;

const Feature = ({features = []}) => {
  return (
    <div className="features">
      {features.map(({ description, title }) => {
        return (
          <React.Fragment key={title}>
            <div className="features__column">
              <h2 className="title_main"> {title} </h2>
              <p className="caption_main op_75"> {description} </p>
            </div>
            <div className="features__separator" />
          </React.Fragment>
        );
      })}
    </div>
  );
};

const settings = {
  dots: false,
  centerMode: false,
  arrows: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1092,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 920,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 748,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
