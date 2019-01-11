import React from "react";
import { Button } from 'reactstrap';

import Navigation from './Components/Navigation';
import Main from './Components/Main';
import Herocontent from './Components/Herocontent';
import ReactMarkdown from 'react-markdown';
import AppMarkdown from '../README.md';

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
    fetch('../README.md')
    .then((resp) => resp.text()) 
    .then(data => {
      this.setState(
        { markdown: data }
      );
    });
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
        <ReactMarkdown source={markdown} />
        <Main />
      </div>
    );
  }
}

export default App;
