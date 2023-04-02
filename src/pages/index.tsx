import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonList } from "@/store/pokemon/actions";
import Image from "next/image";

import Card from "@/components/card/Card";

export default function Home() {
  const pokeman = useSelector((state: any) => state.pokemon);
  const dispatch = useDispatch();

  console.log(pokeman.pokemonList, "pokeman");

  useEffect(() => {
    dispatch(getPokemonList());
  }, [dispatch]);

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
          <div className="header">Header Title</div>
          <div className="flex-container">
            {pokeman.pokemonList.map((pokemon: any, key: number) => (
              <div className="flex-item" key={key}>
                <Card pokemon={pokemon}/>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
