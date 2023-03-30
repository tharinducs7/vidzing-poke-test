import type * as actionTypes from "./actions.types";
import { PokemonInterface } from "@/shared/interfaces/pokemon.interface";

/****************************** GET POKEMON LIST **********************************/
export type GetPokemonList = {
  type: typeof actionTypes.GET_POKEMON_LIST;
};

export type GetPokemonListSuccess = {
  type: typeof actionTypes.GET_POKEMON_LIST_SUCCESS;
  payload: PokemonInterface[];
};

export type GetPokemonListFailure = {
  type: typeof actionTypes.GET_POKEMON_LIST_FAILURE;
  payload: string;
};

export type PokemonActions =
  | GetPokemonList
  | GetPokemonListSuccess
  | GetPokemonListFailure;
