import React from 'react';
import styles from './header.module.css';
import { Link } from 'gatsby';

export default function header() {
  return (
    <div className="main thememain-header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light thememain-header">
          <div className="logoSection">
            <Link to="/">10secondsofcode</Link>
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button> */}
          </div>          

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li>
                <Link to={'/blog'} className="nav-link">Blog</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" title="ReactJs Tutorial">ReactJs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" title="Javascript Tutorial">Javascript</a>
              </li>
            </ul>
            {/* <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> */}
            {/* <button
              className="btn btn-outline-success btn-sm d-block h-75 mr-3"
              type="button"
              onClick={() => changemode()}
              style={{ marginLeft: "12px" }}
            >
              Switch to {currentmode}
            </button> */}
            <a href="https://github.com/10secondsofcode" target="_blank">
               Github
            </a>
            <Link to="#">
              <button className="btn btn-login ml-2">Login</button>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  )
}
