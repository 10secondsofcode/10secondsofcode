import React, { Fragment, Component } from "react";
import { Button } from 'reactstrap';

import Navigation from './Components/Navigation';
import Main from './Components/Main';
import Herocontent from './Components/Herocontent';
import ReactMarkdown from 'react-markdown';
import AppMarkdown from '../README.md';

const importAll = (r) => r.keys().map(r);
const markdownFiles = importAll(require.context('../docs', false, /\.md$/))
  .sort()
  .reverse();

//console.log("markdownFiles====>"+markdownFiles);

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count : 5,
      markdown: ''
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  
  componentDidMount() {
    console.log(markdownFiles);
    const markdown = Promise.all(markdownFiles.map(
      (file) => fetch(file).then((res) => res.text())
    )).catch((err) => console.error(err));

    this.setState((state) => ({ ...state, markdown }));
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
    const { markdown } = this.state;
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
                    <ReactMarkdown source={markdown} />
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