import React from 'react';
import Header from './components/Header';
import './App.css';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
      </div>
    );
  }
}

export default App;
