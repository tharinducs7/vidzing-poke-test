import { all, fork } from "redux-saga/effects";
import pokemonSaga from "./pokemon/saga";

export function* rootSaga() {
  yield all([fork(pokemonSaga)]);
}
