import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <div className="main thememain-header">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light thememain-header">
        <Link to="/"><a className="navbar-brand" href="#" title="10secondsofcode">10secondsofcode</a></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link to="/">
                <a className="nav-link" href="#" title="10secondsofcode">
                      Home
                  <span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" title="ReactJs Tutorial">ReactJs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" title="Javascript Tutorial">Javascript</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          <Link to="/login">
            <button className="btn btn-login ml-2">Login</button>
          </Link>
        </div>
      </nav>
    </div>
  </div>
);

export default Navigation;
