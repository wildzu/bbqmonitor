import { createStore } from "redux"; //an import from the redux library
import reducer from "../reducers";

const initialState = { temperature: {smoker:NaN, meat:NaN}, text_highlight: false };
export const store = createStore(reducer, initialState);

