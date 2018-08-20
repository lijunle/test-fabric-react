import React, { Component } from 'react';
import logo from './logo.svg';
import { NormalPeoplePicker } from 'office-ui-fabric-react/lib/Pickers';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <NormalPeoplePicker
          onResolveSuggestions={this._handleResolveSuggestions}
        />
      </div>
    );
  }

  _handleResolveSuggestions = (value) => {
    return ['A', 'B', 'C'].map(x => ({ onRenderPrimaryText: () => x }));
  }
}

export default App;
