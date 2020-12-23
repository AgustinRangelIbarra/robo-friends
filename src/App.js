import React from 'react'
import Searchbox from './services/Searchbox'
import { robots } from './services/robots';
import CardList from './services/CardList';
import './App.css';
// import CardContainer from './components/CardContainer'
// import { render } from '@testing-library/react';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      robots: robots,
      searchfield: ''
    };
  }
  
  onSearchChange = (e) => {
    console.log(e.target.value);
    this.setState({ searchfield: e.target.value})
  }
  
  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });

    return (
      <div className="App tc">
        <h1 className="f1" >RoboFriends</h1>
        <Searchbox searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots}/>
        {/* <CardContainer robots/> */}
      </div>
    );
  }
}

export default App;
