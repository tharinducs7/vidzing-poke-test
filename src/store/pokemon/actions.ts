import type * as types from "./types";
import * as actionTypes from "./actions.types";
import { PokemonInterface, PokemonTeamInterface } from "@/shared/interfaces/pokemon.interface";

/****************************** GET POKEMON LIST **********************************/
export const getPokemonList = (): types.GetPokemonList => ({
  type: actionTypes.GET_POKEMON_LIST,
});

export const getPokemonListSuccess = (
  payload: PokemonInterface[]
): types.GetPokemonListSuccess => ({
  type: actionTypes.GET_POKEMON_LIST_SUCCESS,
  payload,
});

export const getPokemonListFailure = (
  payload: string
): types.GetPokemonListFailure => ({
  type: actionTypes.GET_POKEMON_LIST_FAILURE,
  payload,
});

/****************************** ADD POKEMON TEAM **********************************/
export const addPokemonTeam = (team :PokemonTeamInterface): types.AddPokemonTeam => ({
  type: actionTypes.ADD_POKEMON_TEAM,
  payload: team
});

export const addPokemonTeamSuccess = (
  payload: PokemonTeamInterface
): types.AddPokemonTeamSuccess => ({
  type: actionTypes.ADD_POKEMON_TEAM_SUCCESS,
  payload,
});

export const addPokemonTeamFailure = (
  payload: string
): types.AddPokemonTeamFailure => ({
  type: actionTypes.ADD_POKEMON_TEAM_FAILURE,
  payload,
});
