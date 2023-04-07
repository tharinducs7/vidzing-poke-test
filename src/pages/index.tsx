/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { toast } from 'react-toast'
import ordinal from "ordinal";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonList, addPokemonTeam } from "@/store/pokemon/actions";

import MainLayout from "@/shared/Layouts/MainLayout";
import Card from "@/components/Card";
import TeamPanel from "@/components/TeamPanel";

import { TOAST_MESSAGES } from "@/utils/constants";
interface Pokemon {
  id: number;
  name: string;
  image: string;
  order: number;
}

export default function Home() {
  const pokemon = useSelector((state: any) => state.pokemon);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState('');
  const [team, setTeam] = useState<Pokemon[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);
  const [isTeamCreated, setIsTeamCreated] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  /**
   * Fetch pokemon list 
   */
  useEffect(() => {
    dispatch(getPokemonList());
  }, [dispatch]);


  const handleSearch = (event: any) => {
    console.log(event.target.value, "test");
    
    setSearchTerm(event.target.value);
  }

  const filteredPokemons = pokemon.pokemonList.filter((pokemon: Pokemon) =>
     pokemon.id.toString() === searchTerm  || pokemon.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  /**
   * Add pokemon to the team
   * @param pokemon 
   */
  const handleAddToTeam = (pokemon: Pokemon) => {
    if (team.length < 6 && !team.includes(pokemon)) {
      pokemon.order = team.length + 1
      setTeam([...team, pokemon]);
      setSearchTerm('')
      setIsSidebarOpen(true)
      toast.success(`${pokemon.name} ${TOAST_MESSAGES.ADDED_TO_TEAM}`)
    } else {
      toast.warn(`${TOAST_MESSAGES.TEAM_FULL}`)
    }
  };

  /**
   * Remove pokemon from the team
   * @param pokemon 
   */
  const handleRemoveFromTeam = (pokemon: Pokemon) => {
    if (team.length !== 0) {
      setTeam(team.filter((p) => p !== pokemon));
      toast.info(`${pokemon.name} ${TOAST_MESSAGES.REMOVED_FROM_TEAM}`)
      if (team.length === 1) setIsSidebarOpen(false)
    } else {
      setIsSidebarOpen(false)
    }
  };

  /**
   * Re-ordering pokemon's - start dragging the element
   * @param event 
   * @param index 
   */
  const handleDragStart = (event: React.DragEvent<HTMLLIElement>, index: number) => {
    setDraggingIndex(index);
  };

  /**
   * Re-ordering pokemon's - finish dragging the element
   * @param event 
   * @param index 
   * @returns 
   */
  const handleDragOver = (event: React.DragEvent<HTMLLIElement>, index: number) => {
    event.preventDefault();
    const targetIndex = index;
    if (draggingIndex === null || draggingIndex === targetIndex) {
      return;
    }
    const newPokemonList = [...team];
    const [movingPokemon] = newPokemonList.splice(draggingIndex, 1);
    movingPokemon.order = targetIndex + 1;
    newPokemonList.splice(targetIndex, 0, movingPokemon);
    setTeam(newPokemonList);
    setDraggingIndex(targetIndex);
    toast(`${movingPokemon.name} moved to ${ordinal(targetIndex + 1)}`)
  };

  /**
   * Save Pokemon Team
   */
  const saveTeam = () => {
    let sortTeam = team.sort((a: any, b: any) => b.order - a.order)

    const Team = {
      members: sortTeam,
      id: 1
    }

    dispatch(addPokemonTeam(Team));
    setIsTeamCreated(true)
  }

  return (
    <>
      <Head>
        <title>Pokedex</title>
        <meta
          name="description"
          content=""
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      </Head>
      <main>
        <div className="app">
          <MainLayout
            search={handleSearch}
            searchTerm={searchTerm}
            sidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
            sidebar={<TeamPanel
              isTeamCreated={isTeamCreated}
              toggleSidebar={toggleSidebar}
              team={team}
              saveTeam={saveTeam}
              handleRemoveFromTeam={handleRemoveFromTeam}
              handleDragStart={handleDragStart}
              handleDragOver={handleDragOver}
            />}
            content={<>
              <div className="flex-container scrollable-container">
                {filteredPokemons.map((pokemon: any, key: number) => (
                  <div className="flex-item" key={key}>
                    <Card pokemon={pokemon} addToTeam={handleAddToTeam} team={team} />
                  </div>
                ))}
              </div>
            </>}
          />
        </div>
      </main>
    </>
  );
}
