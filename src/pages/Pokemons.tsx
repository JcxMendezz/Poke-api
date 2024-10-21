import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPokemons } from "../api/FetchPokemons";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import LoadingScreen from "../Components/LoadingScreen";

import { Pokemon } from "../Types/images";
import { waitFor } from "../Utils/utils";
import styles from "./pokemons.module.css";

const Pokemons = () => {
  const [query, setQuery] = useState("");
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAllPokemons = async () => {
      setIsLoading(true);
      await waitFor(1000);
      const allPokemons = await fetchPokemons();
      setPokemons(allPokemons);
      setIsLoading(false);
    };
    fetchAllPokemons();
  }, []);

  if (isLoading || pokemons === null) {
    return <LoadingScreen />;
  }

  const filteredPokemons = pokemons?.slice(0, 151).filter((pokemon) => {
    return pokemon.name.toLowerCase().match(query.toLowerCase());
  });

  return (
      <>
        <Header query={query} setQuery={setQuery} />
        <main>
          <nav className={styles.nav}>
            {filteredPokemons?.slice(0, 151).map((pokemon) => (
                <Link
                    key={pokemon.id}
                    className={styles.listItem}
                    to={`/pokemons/${pokemon.name.toLowerCase()}`}
                >
                  <img
                      className={styles.listItemIcon}
                      src={pokemon.imgSrc}
                      alt={pokemon.name}
                  />
                  <div className={styles.listItemText}>
                    <span>{pokemon.name}</span>
                    <span>{pokemon.id}</span>
                  </div>
                </Link>
            ))}
          </nav>
        </main>
        <Footer />
      </>
  );
};

export default Pokemons;
