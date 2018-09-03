import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import { store } from './store';

import Socket from './socket/';
import TemperatureView from './containers/temperature_view';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      server: Socket()
    };
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          BBQ mon
          <TemperatureView />
        </div>
      </Provider>
    );
  }
}

export default App;
