import React, { Component } from 'react';
import { View } from 'react-native';

import { store } from '../store';
import { setTemperature } from '../actions';

function dispatchTemperatureUpdate(temperature) {
    store.dispatch(setTemperature(temperature));
}

export default class DataChannel extends Component {
    constructor(props) {
        super(props);

        this.ws = null;
    }

    componentDidMount() {
        this.ws = new WebSocket('ws://192.168.10.114:9996');
        this.ws.onopen = () => {
            // connection opened
            console.log('Connection opened');
            this.ws.send('something'); // send a message
        };

        this.ws.onmessage = (e) => {
            // a message was received
            console.log(e.data);
            const message = JSON.parse(e.data);
            if (message.hasOwnProperty('event')) {

                if (message.event === 'temperature') {
                    //console.log(JSON.stringify(message.payload));
                    dispatchTemperatureUpdate(message.payload);
                }
                 
            } else {
                console.log('Unknown message');
            }
        };

        this.ws.onerror = (e) => {
            // an error occurred
            console.log(e.message);
        };

        this.ws.onclose = (e) => {
            // connection closed
            console.log(e.code, e.reason);
        };        
    }

    componentWillUnmount() {
        console.log('DataChannel will unmount...');
        this.ws.close();
    }
    
    render() {    
        return (
          <View />
        );
      }
}