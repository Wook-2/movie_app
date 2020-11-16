
import React from "react"
// import PropTypes from "prop-types";

class App extends React.Component{

  constructor(props){
    super(props);
    console.log("constructor");
  }

  state = {
    count : 0,
    val : 10
  };

  add = () => {
    this.setState(current => ({count : current.count + 1}))
  };
  minus = () => {
    this.setState(current => ({count : current.count + 1}))
  };

  componentDidMount(){
    console.log("Did mounting!");
  }

  componentDidUpdate(){
    console.log("Did update!");
  }

  render(){
    console.log("Did rendering");
    return (
      <div>
        <h3>count: { this.state.count } </h3>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    
    );
  }

}

export default App;
