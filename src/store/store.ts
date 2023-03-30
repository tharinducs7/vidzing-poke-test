import createSagaMiddleware from "redux-saga";
import Logger from "redux-logger";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "@/store/root-reducer";
import { rootSaga } from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, Logger));
sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof rootReducer>;
export default store;
