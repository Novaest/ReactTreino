import React, {Component} from 'react';

import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component'

import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {    
      monster: [] ,
      searchField:''
    } ;
  }

   componentDidMount(){
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(response=> response.json())
     .then(users => this.setState({monster:users}) )
   };
  render(){
    const{monster, searchField} = this.state; //quiocler way
    // const monster = this.state.monster
    // const searchFiel = this.state.searchField;
    const filteredMonsters = monster.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
     return(
          <div className="App">
          <SearchBox 
            placeholder="Search"
            handleChange={e => this.setState({searchField: e.target.value})}
          />
          
          <CardList monster={filteredMonsters}/>
          </div>
        
    );
  }
}

export default App;
