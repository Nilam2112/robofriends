// import React from 'react';
import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
// import {robots} from './robots';
import './App.css'


// const state = {
// 	robots: robots,
// 	searchfield: ''
// }

// const App = () => {
// 	return(
//      <div className = 'tc'>
//      <h1>RoboFriends</h1>
// 		<SearchBox />
// 		<CardList robots= {robots}/>
//      </div>
// 		);	
// }
class App extends Component {
	constructor() {
		super()
		this.state = {
		robots: [],
		searchfield: ''
      }	
      console.log('1');
	}
  componentDidMount(){
    // console.log('check');
    fetch('https://jsonplaceholder.typicode.com/users') 
     .then(response => response.json())
     .then(users => this.setState({robots: users}));
      // .then(users => {});
  
   console.log('2');
  }
	// onSearchChange is a random function which we have created
    onSearchChange = (event) => {
    	// setState this is the method which come with react
    	this.setState({ searchfield: event.target.value })
    	// const filteredRobots = this.state.robots.filter(robots => {
    	// 	return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    	// })
    	// console.log(event.target.value);
    	// console.log(filteredRobots);
    }

  	render() {
      const { robots, searchfield } = this.state;
  		const filteredRobots = robots.filter(robots =>{
    		return robots.name.toLowerCase().includes(searchfield.toLowerCase());
    	})
      // console.log('3');
    return !robots.length ?
           <h1> Loading</h1> :
          (
           <div className = 'tc'>
           <h1 className = 'f1'>kittens</h1>
      		<SearchBox  searchChange={this.onSearchChange}/>
      		<Scroll>
      		<CardList robots={filteredRobots}/>
          </Scroll>
           </div>
      		);	
      
   }
}
export default App;