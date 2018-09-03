import { TEMPERATURE_UPDATE, TEMPERATURE_HISTORY } from '../actions';

export default (state = [[0]], action) => {
  switch (action.type) {
    case TEMPERATURE_UPDATE:
      // console.log('action', JSON.stringify(action));
      // console.log('state:' + state);
      let newTemps = [...state];


      newTemps.map((sensor, index) => {
        console.log('action.payload[' + index + '] : ' + action.payload[index]);
        sensor.push(action.payload[index]);
      });

      return newTemps;

    case TEMPERATURE_HISTORY:
      let temps = action.payload.reduce((collection, sensorvalue) => {
        collection.push(sensorvalue);
        return collection;
      }, []);

      return temps;

    default:
      return state;
  }
};
