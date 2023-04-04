/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { toast } from 'react-toast'
import ordinal from "ordinal";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonList, addPokemonTeam } from "@/store/pokemon/actions";

import MainLayout from "@/shared/Layouts/MainLayout";
import Card from "@/components/Card";
import TeamCard from "@/components/TeamCard";

import { TOAST_MESSAGES } from "@/utils/constants";

interface Pokemon {
  id: number;
  name: string;
  image: string;
  order: number;
}

export default function Home() {
  const pokeman = useSelector((state: any) => state.pokemon);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState('');
  const [team, setTeam] = useState<Pokemon[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    dispatch(getPokemonList());
  }, [dispatch]);

  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
  }

  const filteredPokemons = pokeman.pokemonList.filter((pokemon: Pokemon) =>
    pokemon.name.toString().includes(searchTerm)
  );

  const handleAddToTeam = (pokemon: Pokemon) => {
    if (team.length < 6 && !team.includes(pokemon)) {
      pokemon.order = team.length+1
      setTeam([...team, pokemon]);
      setSearchTerm('')
      setIsSidebarOpen(true)
      toast.success(`${pokemon.name} ${TOAST_MESSAGES.ADDED_TO_TEAM}`)
    } else {
      toast.warn(`${TOAST_MESSAGES.TEAM_FULL}`)
    }
  };

  const handleRemoveFromTeam = (pokemon: Pokemon) => {
    if (team.length !== 0) {
      setTeam(team.filter((p) => p !== pokemon));
      toast.info(`${pokemon.name} ${TOAST_MESSAGES.REMOVED_FROM_TEAM}`)
      if (team.length === 1) setIsSidebarOpen(false)
    } else {
      setIsSidebarOpen(false)
    }
  };

  const handleDragStart = (event: React.DragEvent<HTMLLIElement>, index: number) => {
    setDraggingIndex(index);
  };

  const handleDragOver = (event: React.DragEvent<HTMLLIElement>, index: number) => {
    event.preventDefault();
    const targetIndex = index;
    if (draggingIndex === null || draggingIndex === targetIndex) {
      return;
    }
    const newPokemonList = [...team];
    const [removed] = newPokemonList.splice(draggingIndex, 1);
    removed.order = targetIndex+1;
    newPokemonList.splice(targetIndex, 0, removed);
    setTeam(newPokemonList);
    setDraggingIndex(targetIndex);
    toast(`${removed.name} moved to ${ordinal(targetIndex + 1)}`)
  };

  const saveTeam = () => {
    console.log(team);
    const Team = {
      members: team,
      id: 1
    }
    dispatch(addPokemonTeam(Team));
  }

  return (
    <>
      <Head>
        <title>Vidzing Front-end test</title>
        <meta
          name="description"
          content="Small test for front-end developers"
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
            sidebar={<div className="sidebar">
              <div className="container">
                <img
                  alt="Official Pokemon Logo"
                  className="pokemon-logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"
                />
                <div className="team">
                  <button className="close-button" onClick={() => toggleSidebar()}>
                    <i className='bx bx-window-close' style={{ color: "#f30000" }}  ></i>
                  </button>
                  <div className="team__container">
                    <div className="team__list" id="team-items">
                      {team.map((pokemon: any, key: number) => (
                        <TeamCard
                          pokemon={pokemon}
                          key={key}
                          index={key}
                          handleRemoveFromTeam={handleRemoveFromTeam}
                          handleDragStart={handleDragStart}
                          handleDragOver={handleDragOver}
                        />
                      ))}
                    </div>
                  </div>
                  {team.length === 6 && <button className="button-10" role="button" onClick={() => saveTeam()}>Save Team</button>}
                </div>
              </div>
            </div>}
            content={<>
              <div className="flex-container">
                {filteredPokemons.map((pokemon: any, key: number) => (
                  <div className="flex-item" key={key}>
                    <div className="contenedorCards">
                      <Card pokemon={pokemon} addToTeam={handleAddToTeam} team={team} />
                    </div>
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
