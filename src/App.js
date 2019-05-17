import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar/navbar.js';
import Header from './components/hello/hello.js';
import About from './components/about-me/about-me.js';
import Contact from './components/contact/contact.js';
import Work from './components/work/work.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-view">
          <NavBar className="nav-bar-comp"/>
          <Header className="hello-comp"/>
          <About className="about-comp"/>
          <Work className='work-comp' />
          <Contact className="contact-comp" />
        </div>
      </div>
    );
  }
}

export default App;
