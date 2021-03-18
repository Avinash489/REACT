import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Header from './Header';
import Content from './Content';

class App extends React.Component {
  render() {
     return (
        <div className="App">
         <h1> Learn React </h1>
           <Header/>
           <Content/>
        </div>
     );
  }
}


export default App;
