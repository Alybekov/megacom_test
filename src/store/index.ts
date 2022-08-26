import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk';

import weatherReducer from "./reducers/weatherReducer";
import alertReducer from "./reducers/alertReducer";

const rootReducer = combineReducers({
    weather: weatherReducer,
    alert: alertReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>

export default store;