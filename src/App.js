import React from "react";
import main from './main.css';

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
          <Counter/>
          <Header/>
          <Content/>
          <Footer/>
        </div>
     );
  }
}

class Counter extends React.Component{
  render(){
    return (
      <div>
          <h1>Simple Counter</h1>         
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
