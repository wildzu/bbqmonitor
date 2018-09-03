import { createStore } from "redux"; //an import from the redux library
import reducer from "../reducers";

const initialState = { };
export const store = createStore(reducer, initialState);

