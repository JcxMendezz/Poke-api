import { useNavigate, useParams } from "react-router-dom";
import pokeballSrc from "../assets/pokeball.png";
import Footer from "../Components/Footer";
import styles from "../pages/pokemon.module.css";

import { useEffect, useState } from "react";
import { fetchPokemon } from "../api/fetchPokemon";
import LoadingScreen from "../Components/LoadingScreen";
import { PokemonDetails } from "../Types/images";
import { waitFor } from "../Utils/utils";
import React from "react";

const Pokemon = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState<PokemonDetails>();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function getPokemon() {
      setIsLoading(true);
      await waitFor(300);
      const fetchedPokemon = await fetchPokemon(name as string);
      setPokemon(fetchedPokemon);
      setIsLoading(false);
    }
    getPokemon();
  }, [name]);

  if (isLoading || !pokemon) {
    return <LoadingScreen />;
  }

  return (
    <>
      <button className={styles.pokeballButton} onClick={() => navigate(-1)}>
        <img className={styles.pokeballImg} src={pokeballSrc} alt="pokeball" />
        <h3>
          Go back
        </h3>
      </button>
      <div className={styles.pokemon}>
        <main className={styles.pokemonInfo}>
          <div className={styles.pokemonTitle}>{name?.toUpperCase()}</div>
          <div>Nr. {pokemon?.id}</div>
          <div>
            <img
              className={styles.pokemonInfoImg}
              src={pokemon?.imgSrc}
              alt={pokemon?.name}
            />
          </div>
          <div>HP: {pokemon?.hp}</div>
          <div>Attack: {pokemon?.attack}</div>
          <div>Defense: {pokemon?.defense}</div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Pokemon;
