export const TEMPERATURE_UPDATE = 'TEMPERATURE_UPDATE';
export const TEMPERATURE_HISTORY = 'TEMPERATURE_HISTORY';

export function temperatureUpdate(item) {
  console.log('a temperature update :', item);
  return {
    type: TEMPERATURE_UPDATE,
    payload: item
  };
}

export function temperatureHistory(item) {
  console.log('history of temperatures received: ' + item);
  return {
    type: TEMPERATURE_HISTORY,
    payload: item
  }
}