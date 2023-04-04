/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonList } from "@/store/pokemon/actions";
import Image from "next/image";
import MainLayout from "@/shared/Layouts/MainLayout";

import Card from "@/components/card/Card";

interface Pokemon {
  id: number;
  name: string;
  image: string;
}

export default function Home() {
  const pokeman = useSelector((state: any) => state.pokemon);
  const dispatch = useDispatch();

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [team, setTeam] = useState<Pokemon[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
      setTeam([...team, pokemon]);
    }
  };

  const handleRemoveFromTeam = (pokemon: Pokemon) => {
    setTeam(team.filter((p) => p !== pokemon));
  };

  const handleTeamOrderChange = (event: any, oldIndex: number, newIndex: number) => {
    const newTeam = [...team];
    newTeam.splice(oldIndex, 1);
    newTeam.splice(newIndex, 0, team[oldIndex]);
    setTeam(newTeam);
  };

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
      </Head>
      <main>
        <div className="app">


          <MainLayout
            teamLength={team.length}
            sidebar={<div className="sidebar">
              <div className="container">
                <img
                  alt="Official Pokemon Logo"
                  className="pokemon-logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"
                />
                <div className="drop">
                  <div className="drop__container">
                    <div className="drop__list" id="drop-items">
                      {team.map((pokemon: any, key: number) => (
                        <div className="drop__card" key={key}>
                          <div className="drop__data">
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt="" className="drop__img" />
                            <div>
                              <h1 className="drop__name">{pokemon.name}</h1>
                              <span className="drop__profession">Front-End Developer</span>
                            </div>
                          </div>

                          <div>
                            <a href="#" className="drop__social"><i className='bx bxl-instagram'></i> b </a>
                            <a href="#" className="drop__social"><i className='bx bxl-linkedin'></i> f</a>
                            <a href="#" className="drop__social"><i className='bx bxl-twitter'></i>f</a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>}
            content={<>
              <div className="flex-container">
                {filteredPokemons.map((pokemon: any, key: number) => (
                  <div className="flex-item" key={key}>
                    <div className="contenedorCards">
                      <Card pokemon={pokemon} addToTeam={handleAddToTeam} />
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
