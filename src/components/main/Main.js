import React, { Fragment } from 'react';
import { Link } from 'gatsby';

const Main = (props) => {
    const titleMetaData = props.titleMetaData;

    return(
        <Fragment>
            <div className="container main hero-content-main">
                <div className="col-12">
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
                                        <li>
                                            <Link to={topics.url} title={topics.title}>{topics.title}</Link>
                                        </li>
                                        )}
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </Fragment>
    );
}

export default Main;
