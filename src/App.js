import React, { Fragment, Component } from "react";
import { Button } from 'reactstrap';

import Navigation from './Components/Navigation';
import Main from './Components/Main';
import Herocontent from './Components/Herocontent';
import ReactMarkdown from 'react-markdown';
import AppMarkdown from '../README.md';

// const importAll = (r) => r.keys().map(r);
// const markdownFiles = importAll(require.context('../docs', false, /\.md$/))
//   .sort()
//   .reverse();

//console.log("markdownFiles====>"+markdownFiles);

// const markdownContext = require.context('../docs', false, /\.md$/);
// console.log(markdownContext.keys());

// function importAll (r) {
//   r.keys().forEach(r);
// }

/* importAll(require.context('../docs/', true, /\.js$/));

const markdownContext = require.context('../docs', false, /\.md$/);
const markdownFiles = markdownContext
  .keys()
  .map((filename) => markdownContext(filename))
console.log(markdownFiles); */

const importAll = (r) => r.keys().map(r);
const markdownFiles = importAll(require.context('../docs/', false, /\.md$/));

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count : 5,
      posts: ''
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  
   async componentDidMount() {
    console.log(markdownFiles);
    const posts = markdownFiles

    this.setState((state) => ({ ...state, posts }));
  }

  increment() {
    this.setState(
      {count : this.state.count+1}
    );
  }
  
  decrement() {
    this.setState(
      {count : this.state.count-1}
    );
  }

  render() {  
    const { posts } = this.state;
    //console.log("post===>"+posts);
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
                      //posts.map((post, idx) => (
                        <ReactMarkdown source={posts} />
                      //))
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