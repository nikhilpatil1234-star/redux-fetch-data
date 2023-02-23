import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk"
import { reducers } from "../reducers";


const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_ || compose
// const store=createStore(reducers,{}, window.__REDUX_DEVTOOLS_EXTENSION__ && 
//     window.__REDUX_DEVTOOLS_EXTENSION__())
const store=createStore(reducers,composeEnhancers(applyMiddleware(thunk)))
export default store

