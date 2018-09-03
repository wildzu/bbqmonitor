import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import { store } from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">BBQ mon</div>
      </Provider>
    );
  }
}

export default App;
