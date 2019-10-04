import React, { Fragment, Component } from "react";
import { Button } from 'reactstrap';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import Login from './Components/login';
import Herocontent from './Components/Herocontent';
import ReactMarkdown from 'react-markdown';
import AppMarkdown from '../README.md';

const markdownContext = require.context('../docs', false, /\.md$/);
const markdownFiles = markdownContext
  .keys()
//.map((filename) => markdownContext(filename))
//console.log("hey"+markdownFiles); 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 5,
      posts1: []
    }
  }

  componentDidMount() {
    var newPosts = [];
    const posts = markdownFiles.forEach(
      (file, key) => {
        newPosts.push({
          id: key,
          data: "." + file
        });
      }
    );

    newPosts.map(
      (post) => {
        let a = 10;
        console.log("new values===>" + post.data);
        let av = this.apiGetAll(post.data);
        console.log("json--->" + JSON.stringify(av));
      }
    );
    //this.apiGetAll(newPosts["data"]);
    return false;
  }

  async apiGetAll(newPosts) {
    let cc = [];
    try {
      const resp = await fetch(newPosts).then(res => res.text());
      console.log("fetch---" + resp);
      cc.push({
        data: resp
      });
      console.log("json--->" + JSON.stringify(cc));
      /* const newResp = await Promise.all((resp)).then(result => {
       console.log("hey--->"+result);
        this.setState({posts1: result});
      });*/
      // this.setState({posts1: resp});
      // console.log("dsffdsf===="+this.state.posts1);
      return resp;
    } catch (err) {
      console.log(err);
    }
  }

  /*getFileResults(newPosts) {
    let data = [];
    Promise.all(
                newPosts.forEach(
                    (file) => {
                      fetch(file.data)
                        .then( res => res.text() )
                        .then( 
                          text =>
                          {
                            console.log("text===>"+text);
                            data.push(text);
                            return data;
                            //this.setState((state) => ({ ...state, posts1 }));
                          }
                        )
                      }
                    ) 
                ).then(result => {
                  const [ data ] = result;
                  console.log("hey--->"+result);
                  
                });
  }*/

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navigation />
          <Route exact path="/" component={Herocontent} />
          <Route path="/login" component={Login} />
          <Fragment>
            <section className="section">
              <div className="container">
                <div className="card">
                  <div className="card-content">
                    <div className="content">
                      {
                        //newPosts.map((post, idx) => (
                        // this.state.posts1
                        // ))
                      }
                      <ReactMarkdown source={this.state.posts1} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

//https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
