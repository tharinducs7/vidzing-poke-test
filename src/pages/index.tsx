import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonList } from "@/store/pokemon/actions";
import Image from "next/image";

import Card from "@/components/card/Card";

export default function Home() {
  const pokeman = useSelector((state: any) => state.pokemon);
  const dispatch = useDispatch();

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }

  useEffect(() => {
    dispatch(getPokemonList());
  }, [dispatch]);

  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
  }

  const filteredPokemons = pokeman.pokemonList.filter((pokemon: any) =>
    pokemon.name.toString().includes(searchTerm)
  );

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
        <div>
          <div className="header">Header Title
          </div>
           <div className="App-search">
            <input type="text" placeholder="Search" onChange={handleSearch} />
          </div>
          <div className="flex-container">
            {filteredPokemons.map((pokemon: any, key: number) => (
              <div className="flex-item" key={key}>
                <Card pokemon={pokemon} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
