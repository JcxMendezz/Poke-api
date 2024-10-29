import styles from "./header.module.css";
import React from "react";
// Need a plugin for typescript to use module css

type HeaderProps = {
    query: string;
    setQuery: (query: string) => void;
};

const Header = ({query, setQuery}: HeaderProps) => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>
                Pokedex Finder
            </h1>
            <input
                className={styles.input}
                value={query}
                placeholder="Busca Pokemons"
                onChange={(event) => setQuery(event.target.value.trim())}
                type="text"
            />
        </header>
    );
};

export default Header;
