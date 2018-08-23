import React from 'react';
import { Text, View } from 'react-native';

const Temperature = (props) => {
    return (
        <View>
            <Text onPress={props.textClick}> Current temperatures : </Text>
            <Text>Smoker : {Number(props.temperature.smoker).toFixed(2)} °C</Text>
            <Text>Meat   : {Number(props.temperature.meat).toFixed(2)} °C</Text>
            <Text>{props.clickState ? 'B' : ''}</Text>
        </View>
    );
}

export default Temperature;