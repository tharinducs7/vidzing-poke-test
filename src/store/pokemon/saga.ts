import { all, call, put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "./actions.types";
import * as actions from "./actions";
import axios from "axios";
import {
  Pokemon,
  PokemonApiResponse,
  PokemonInterface,
  PokemonTeamInterface
} from "@/shared/interfaces/pokemon.interface";


function getPokeList() {
  return axios.get("https://pokeapi.co/api/v2/pokemon?limit=151", {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function getPokemon(url: string) {
  return axios.get(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function* getPokemonListSaga() {
  try {
    // Getting pokemon list
    const pokeListResponse: { data: { results: PokemonApiResponse[] } } =
      yield getPokeList();

    // Getting pokemon information
    const pokeList: [{ data: Pokemon }] = yield all(
      pokeListResponse.data.results?.map((pokemon: PokemonApiResponse) =>
        call(getPokemon, pokemon.url)
      )
    );
    if (pokeList) {
      const pokemonListWithData: PokemonInterface[] = pokeList.map(
        (responseData) => {
          const { data } = responseData;
          const { name, id, sprites } = data;
          return {
            id: id,
            name: name,
            image: sprites.front_default,
          };
        }
      );
      yield put(actions.getPokemonListSuccess(pokemonListWithData));
    } else {
      yield put(actions.getPokemonListFailure("Error getting pokemon details"));
    }
  } catch (error) {
    console.log(error);
    yield put(actions.getPokemonListFailure("Error in pokemon saga"));
  }
}

function* addPokemonTeamSaga(action: { type: string; payload: PokemonTeamInterface }) {
  try {
    const { payload } = action;
    console.log(payload, "payload in saga");
   // yield put(actions.addPokemonTeamSuccess(payload));
  } catch (error) {
    console.log(error);
    yield put(actions.addPokemonTeamFailure("Error adding pokemon to team"));
  }
}

function* pokemonSaga() {
  yield all([
    takeLatest(actionTypes.GET_POKEMON_LIST, getPokemonListSaga),
    takeLatest(actionTypes.ADD_POKEMON_TEAM, addPokemonTeamSaga)
  ]);
}

export default pokemonSaga;
