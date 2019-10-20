
import React from 'react';
import { Link } from 'react-router-dom'
import { titleMetaData } from './data';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 5,
      posts1: []
    }
  }

  componentDidMount() {
    //console.log(JSON.stringify(titleMetaData));
  }

  render() {
    return (
      <div className={this.props.isDark ? 'main thememain-dark' : 'main thememain-white'}>
        {
          titleMetaData.map((title) =>
            <div className="container content-main">
              <div className="row">
                <div className="col-12">
                  <h3>{title.labelTitle}</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <ul>
                    {title.topics.map((topics) =>
                      <li><Link to={topics.url}>{topics.title}</Link></li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          )
        }
      </div>
    );
  }
}
export default Main;
