import React, { Fragment } from 'react';
// import Main from './Main';
import './herocontent.css';

const HeroContent = (props) => (
  <Fragment>
    <div className="container main hero-content-main">
      <div className="col-12">
        <h1 className="theme-text">The Modern ReactJS Tutorial</h1>
        <p className="theme-text">
            How it&apos;s done now. From the basics to advanced topics with simple,
            but detailed explanations.
          {/* <a className="button button--big" href="#">Download for Linux</a> */}
        </p>
        <div className="theme-text">
          <a className="button button--big" href="#">View on github</a>
          <a className="button button--big" href="#">twitter</a>
          <a className="button button--big" href="#">fb</a>
        </div>
        <div className="">
          <div className="search-content">
            <form className="theme-search form-inline my-2 my-lg-0 theme-text">
              <input className=" theme-search-input form-control mr-sm-2" type="search" placeholder="Search" />
              <button className="theme-search-btn btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </div>
        <div className="theme-text banner-text">
          <h2>Table of contents</h2>
          <p className="content">Main course contains 2 parts which cover reactjs and interview fundamentals.</p>
        </div>
      </div>
    </div>
  </Fragment>
);

export default HeroContent;
