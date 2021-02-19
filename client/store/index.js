import createSagaMiddleware from "redux-saga";
import {applyMiddleware, createStore} from "redux";
import createReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(createReducer(), {}, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;