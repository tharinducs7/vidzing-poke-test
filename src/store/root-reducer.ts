import { pokemonReducer } from "@/store/pokemon/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
});

export default rootReducer;
