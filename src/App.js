import React from "react";
import { Button } from 'reactstrap';

import Navigation from './Components/Navigation';
import Main from './Components/Main';
import Herocontent from './Components/Herocontent';

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
      <div>
        <Navigation />
        <Herocontent />
        <Main />
      </div>
    );
  }
}

export default App;
