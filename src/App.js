import React from 'react'
import Searchbox from './services/Searchbox'
import CardList from './services/CardList';
import Scroll from './components/Scroll'
import ErrorBoundary from './components/ErrorBoundary'
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      robots: [],       // robots,
      searchfield: ''
    };
    console.log('1')
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users}));
    
    console.log("2");
  }
  
  onSearchChange = (e) => {
    console.log(e.target.value);
    this.setState({ searchfield: e.target.value})
  }
  
  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    console.log("3");

    if (this.state.robots.length === 0) {
      return <h1 className="tc">Loading ...</h1>
    } else {
      return (
        <div className="App tc">
          <h1 className="f1" >RoboFriends</h1>
          <Searchbox searchChange={this.onSearchChange}/>
          
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots}/>
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
