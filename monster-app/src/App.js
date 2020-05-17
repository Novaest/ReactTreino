import React, {Component} from 'react';

import {CardList} from './components/card-list/card-list.component';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {    
      monster: [
      ] 
    } ;
  }

   componentDidMount(){
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(response=> response.json())
     .then(users => this.setState({monster:users}) )
   };
  render(){
    return(
          <div className="App">
          <CardList monster={this.state.monster}/>
          </div>
        
    );
  }
}

export default App;
