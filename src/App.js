import React, { Fragment, Component } from "react";
import { Button } from 'reactstrap';

import Navigation from './Components/Navigation';
import Main from './Components/Main';
import Herocontent from './Components/Herocontent';
import ReactMarkdown from 'react-markdown';
import AppMarkdown from '../README.md';

const markdownContext = require.context('../docs', false, /\.md$/);
const markdownFiles = markdownContext
  .keys()
  //.map((filename) => markdownContext(filename))
console.log("hey"+markdownFiles); 

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count : 5,
      posts: ''
    }
  }
  
  componentDidMount() {
    console.log("mark files===>"+markdownFiles);
    var newPosts = [];
    const posts = markdownFiles.forEach(
                    (file, key  ) => {
                      newPosts.push({
                        id: key, 
                        data:  "."+file
                      });
                    }
                  );

  console.log("posts array value ==>"+JSON.stringify(newPosts))
    const posts1 = Promise.all(
                      newPosts.forEach(
                          (file, key  ) => {
                            console.log("---> "+file.data+" ,==="+key)
                              fetch(file.data)
                              .then( res => res.text() )
                              .then( 
                                text =>
                                {
                                  console.log("text===>"+text);
                                  //this.setState({ posts1: text });
                                }
                              )
                            }
                          )
                        ) ;                   
    //console.log("posts array value ==>"+JSON.stringify(posts1))
    //console.log("posts array value ==>"+JSON.stringify(newPosts))
    //this.setState((state) => ({ ...state, posts }));
  }

  render() {  
    //const { newPosts } = this.state;
    //console.log("posts array value ==>"+JSON.stringify(newPosts))
    return (
      <div>
        <Navigation />
        <Herocontent />
        <Main />
        <Fragment>
          <section className="section">
            <div className="container">
              <div className="card">
                <div className="card-content">
                  <div className="content">
                    {
                      //newPosts.map((post, idx) => (
                        
                      // ))
                    } 
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Fragment>
      </div>
    );
  }
}

export default App;

//https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f