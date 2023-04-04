import type * as actionTypes from "./actions.types";
import { PokemonInterface, PokemonTeamInterface } from "@/shared/interfaces/pokemon.interface";

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


/****************************** ADD POKEMON TEAM **********************************/
export type AddPokemonTeam = {
  type: typeof actionTypes.ADD_POKEMON_TEAM;
  payload: PokemonTeamInterface;
};

export type AddPokemonTeamSuccess = {
  type: typeof actionTypes.ADD_POKEMON_TEAM_SUCCESS;
  payload: PokemonTeamInterface;
};

export type AddPokemonTeamFailure = {
  type: typeof actionTypes.ADD_POKEMON_TEAM_FAILURE;
  payload: string;
};

export type PokemonActions =
  | GetPokemonList
  | GetPokemonListSuccess
  | GetPokemonListFailure
  | AddPokemonTeam
  | AddPokemonTeamSuccess
  | AddPokemonTeamFailure;
