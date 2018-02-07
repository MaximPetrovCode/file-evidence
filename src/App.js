import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navigation />
        <Footer />
      </div>
    );
  }
}

export default App;
