import { store } from '../store';

import { temperatureUpdate, temperatureHistory } from '../actions';

export default function() {
  let bbqsocket = new WebSocket('ws://192.168.10.126:1337');

  function dispatchTemperatureUpdate(temperature) {
    store.dispatch(temperatureUpdate(temperature));
  }



  bbqsocket.onmessage = message => {
    console.log('received : ' + message.data);

    const data = JSON.parse(message.data);
    switch (data.event) {
      case 'temperature':
        console.log(JSON.stringify(data));
        dispatchTemperatureUpdate(data.payload);
        break;

      case 'temperature_history':
        console.log(JSON.stringify(data));
        store.dispatch(temperatureHistory(data.payload));
        break;

      default:
        break;
    }
  };
}
