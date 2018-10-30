
import React from 'react';

class Main extends React.Component {
  render() {
    return (
        <div className="row">
            <div className="row container">
                <div className="jumbotron container jumbotron-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 main-text">
                                <h1>Debug APIs like a <span className="jumbotron__undie">human</span>, not a robot</h1>
                                <p className="font-light text-xl no-margin-bottom">Finally, a REST client you'll</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <section className="no-margin padding-top-lg padding-bottom-lg">
                    <div className="container center">
                        <div className="row">
                            <div className="col-12 main-text">
                                <h2 className="text-xxl">Powerful HTTP and GraphQL tool belt</h2>
                                <p className="text-lg"><strong>Free</strong> and <strong>open source</strong> on Mac, Windows, and Linux</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4 padding-top">
                                <div className="img--promo">
                                    <div className="gatsby-image-outer-wrapper" >
                                        <div className="gatsby-image-wrapper" >
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                                <h3>Create HTTP requests</h3>
                                <p>Specify URL, payload, headers, and authorization all in one place. Then just hit send.</p>
                            </div>

                            <div className="col-4 padding-top">
                                <div className="img--promo">
                                    <div className="gatsby-image-outer-wrapper" >
                                        <div className="gatsby-image-wrapper" >
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                                <h3>View response details</h3>
                                <p>Get all the details on every response. View status code, body, headers, cookies, and more!</p>
                            </div>
                                
                            <div className="col-4 padding-top">
                                <div className="img--promo">
                                    <div className="gatsby-image-outer-wrapper" >
                                        <div className="gatsby-image-wrapper" >
                                            <div></div>
                                        </div>
                                    </div> 
                                </div>
                                <h3>Organize everything</h3>
                                <p>Create workspaces or folders, drag-and-drop requests, and easily import and export your data.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
  }
}

export default Main;