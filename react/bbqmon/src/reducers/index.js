import { combineReducers } from 'redux';
import TemperatureReducer from './temperature_reducer';

const rootReducer = combineReducers({
    temperatures : TemperatureReducer
});

export default rootReducer;
