import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import DataChannel from './components/DataChannel';
import TemperatureContainer from './containers/TemperatureContainer';

import { store } from "./store";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <DataChannel />
          <Text> BBQ Monitor by mrW </Text>
          <TemperatureContainer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
