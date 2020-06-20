import React from 'react';
import { Link } from 'gatsby';

import Header from '../header/header';
import HeroContent from '../herocontent/HeroContent';
import Main from '../main/Main';
import styles from './homepage.module.css';
import '../../assets/css/font-awesome.min.css';
import titleMetaData from '../data';

export default function Homepage() {
  return (
    <div className={styles.flexbox}>
      <div className={styles.thememainHeader}>
        <Header></Header>
      </div>

      <div className={styles.flexContainer}>        
        <div className={styles.thememainBlue}>
          <div className={styles.flexContainer}>
            <HeroContent />
          </div> 
        </div>        
      </div>

      <div className={styles.flexContainer}>        
        <div className={styles.thememainWhite}>
          <Main titleMetaData={titleMetaData} />
        </div>
      </div>

      <div className={styles.flexContainer}>        
        <div className={styles.thememainFooter}>
          <div className="footer">
            <ul className={styles.socialRibbon}>
              <li>
                <a
                  target="_blank"
                  title="Github"
                  href="https://github.com/10secondsofcode"
                >
                  <i className="fa fa-2x fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  title="Twitter"
                  href="#"
                >
                  <i className="fa fa-2x fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  title="Linkedin"
                  href="https://linkedin.com/in/#"
                >
                  <i className="fa fa-2x fa-linkedin"></i>
                </a>
              </li>
              <li>
                <Link to={'/blog'} title="Blog">
                  <i className="fa fa-2x fa-square"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>        
      </div>
    </div>
  )
}
