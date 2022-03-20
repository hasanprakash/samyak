// import { Link } from 'react-router-dom';

import NavBarSpace from "../BaseComponents/NavBarSpace";
import './Gallery.css';

const bigPortFolioIcon = require("../Bootstrap/img/big_portfolio_item_4.png");
const bigPortfolioItem2 = require("../Bootstrap/img/big_portfolio_item_2.png");

const portFolioItem1 = require("../Bootstrap/img/portfolio_item_1.png");
const portFolioItem2 = require("../Bootstrap/img/portfolio_item_2.png");
const portFolioItem3 = require("../Bootstrap/img/portfolio_item_3.png");
const portFolioItem4 = require("../Bootstrap/img/portfolio_item_4.png");
const portFolioItem5 = require("../Bootstrap/img/portfolio_item_5.png");
const portFolioItem6 = require("../Bootstrap/img/portfolio_item_6.png");
const portFolioItem7 = require("../Bootstrap/img/portfolio_item_7.png");
const portFolioItem8 = require("../Bootstrap/img/portfolio_item_8.png");
const portFolioItem9 = require("../Bootstrap/img/portfolio_item_9.png");

const Gallery = () => {
  return (
    <div className="gallery__container">
      <div className="grid-portfolio" id="portfolio">
        <NavBarSpace />
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="portfolio-item">
                <div className="thumb">
                  <a
                    href={bigPortFolioIcon}
                    data-lightbox="image-1"
                  >
                    <div className="hover-effect">
                      <div className="hover-content">
                        <h1>
                          Biodiesel <em>squid</em>
                        </h1>
                        <p>Awesome Subtittle Goes Here</p>
                      </div>
                    </div>
                  </a>
                  <div className="image">
                    <img src={portFolioItem4} alt="pfi4"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="portfolio-item">
                <div className="thumb">
                  <a
                    href={bigPortfolioItem2}
                    data-lightbox="image-1"
                  >
                    <div className="hover-effect">
                      <div className="hover-content">
                        <h1>
                          raclette <em>taxidermy</em>
                        </h1>
                        <p>Awesome Subtittle Goes Here</p>
                      </div>
                    </div>
                  </a>
                  <div className="image">
                    <img src={portFolioItem2} alt="pfi2"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="portfolio-item">
                <div className="thumb">
                  <a
                    href="img/big_portfolio_item_3.png"
                    data-lightbox="image-1"
                  >
                    <div className="hover-effect">
                      <div className="hover-content">
                        <h1>
                          humblebrag <em>brunch</em>
                        </h1>
                        <p>Awesome Subtittle Goes Here</p>
                      </div>
                    </div>
                  </a>
                  <div className="image">
                    <img src={portFolioItem3} alt="pfi3"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="portfolio-item">
                <div className="thumb">
                  <a
                    href="img/big_portfolio_item_1.png"
                    data-lightbox="image-1"
                  >
                    <div className="hover-effect">
                      <div className="hover-content">
                        <h1>
                          Succulents <em>chambray</em>
                        </h1>
                        <p>Awesome Subtittle Goes Here</p>
                      </div>
                    </div>
                  </a>
                  <div className="image">
                    <img src={portFolioItem1} alt="pfi1"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="portfolio-item">
                <div className="thumb">
                  <a
                    href="img/big_portfolio_item_5.png"
                    data-lightbox="image-1"
                  >
                    <div className="hover-effect">
                      <div className="hover-content">
                        <h1>
                          freegan <em>aesthetic</em>
                        </h1>
                        <p>Awesome Subtittle Goes Here</p>
                      </div>
                    </div>
                  </a>
                  <div className="image">
                    <img src={portFolioItem5} alt="pfi5"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="portfolio-item">
                <div className="thumb">
                  <a
                    href="img/big_portfolio_item_6.png"
                    data-lightbox="image-1"
                  >
                    <div className="hover-effect">
                      <div className="hover-content">
                        <h1>
                          taiyaki <em>vegan</em>
                        </h1>
                        <p>Awesome Subtittle Goes Here</p>
                      </div>
                    </div>
                  </a>
                  <div className="image">
                    <img src={portFolioItem6} alt="pfi6"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="portfolio-item">
                <div className="thumb">
                  <a
                    href="img/big_portfolio_item_7.png"
                    data-lightbox="image-1"
                  >
                    <div className="hover-effect">
                      <div className="hover-content">
                        <h1>
                          Thundercats <em>santo</em>
                        </h1>
                        <p>Awesome Subtittle Goes Here</p>
                      </div>
                    </div>
                  </a>
                  <div className="image">
                    <img src={portFolioItem7} alt="pfi7"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="portfolio-item">
                <div className="thumb">
                  <a
                    href="img/big_portfolio_item_8.png"
                    data-lightbox="image-1"
                  >
                    <div className="hover-effect">
                      <div className="hover-content">
                        <h1>
                          wayfarers <em>yuccie</em>
                        </h1>
                        <p>Awesome Subtittle Goes Here</p>
                      </div>
                    </div>
                  </a>
                  <div className="image">
                    <img src={portFolioItem8} alt="pfi8"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="portfolio-item">
                <div className="thumb">
                  <a
                    href="img/big_portfolio_item_9.png"
                    data-lightbox="image-1"
                  >
                    <div className="hover-effect">
                      <div className="hover-content">
                        <h1>
                          disrupt <em>street</em>
                        </h1>
                        <p>Awesome Subtittle Goes Here</p>
                      </div>
                    </div>
                  </a>
                  <div className="image">
                    <img src={portFolioItem9} alt="pfi9" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="load-more-button">
                <a href="#0">Load More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
