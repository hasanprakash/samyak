// import { Link } from 'react-router-dom';

import NavBarSpace from "../BaseComponents/NavBarSpace";
import GalleryCard from "../Cards/GalleryCard";
import './Gallery.css';

// const bigPortFolioIcon = require("../Bootstrap/img/big_portfolio_item_4.png");
// const bigPortfolioItem2 = require("../Bootstrap/img/big_portfolio_item_2.png");

const portFolioItem1 = require("../Bootstrap/img/portfolio_item_1.png");
const portFolioItem2 = require("../Bootstrap/img/portfolio_item_2.png");
const portFolioItem3 = require("../Bootstrap/img/portfolio_item_3.png");
const portFolioItem4 = require("../Bootstrap/img/portfolio_item_4.png");
// const portFolioItem5 = require("../Bootstrap/img/portfolio_item_5.png");
// const portFolioItem6 = require("../Bootstrap/img/portfolio_item_6.png");
// const portFolioItem7 = require("../Bootstrap/img/portfolio_item_7.png");
// const portFolioItem8 = require("../Bootstrap/img/portfolio_item_8.png");
// const portFolioItem9 = require("../Bootstrap/img/portfolio_item_9.png");

const Gallery = () => {
  return (
    <div className="gallery__container">
      <div className="grid-portfolio" id="portfolio">
        <NavBarSpace />
        <div className="container">
          <div className="row">
            <GalleryCard firstTitle={"Hasan"} secondTitle={"Prakash"} subTitle={"srihasanprakash"} imgUrl={portFolioItem2} />
            <GalleryCard firstTitle={"raclette"} secondTitle={"taxidermy"} subTitle={"The Subtitle"} imgUrl={portFolioItem1} />
            <GalleryCard firstTitle={"Hello"} secondTitle={"World"} subTitle={"The Subtitle"} imgUrl={portFolioItem3} />
            <GalleryCard firstTitle={"Image4"} secondTitle={"Image4"} subTitle={"The Subtitle"} imgUrl={portFolioItem4} />
          </div>
          {/* <div className="row">
            <div className="col-md-12">
              <div className="load-more-button">
                <a href="#0">Load More</a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
