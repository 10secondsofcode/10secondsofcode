import React from "react";
import { Button } from 'reactstrap';

import Navigation from './Components/Navigation';
import Main from './Components/Main';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count : 0
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
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
     return (
        <div className="container thememain">
          <Navigation />  
          <div className="container main">
          <Main /> 
          </div>
        </div>
     );
  }
}

class Header extends React.Component{
  render(){
    return (
      <div>
          <h1>Header sectionsr</h1>     
          
      </div>
    );
  }
}

class Content extends React.Component{
  render(){
    return (
      <div>
          <h1>Content Sections</h1>         
      </div>
    );
  }
}

class Footer extends React.Component{
  render(){
    return (
      <div>
          <h1>Footer Content</h1>         
      </div>
    );
  }
}

export default App;
