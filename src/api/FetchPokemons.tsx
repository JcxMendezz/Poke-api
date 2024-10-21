// https://unpkg.com/pokemons@1.1.0/pokemons.json

import {Pokemon} from "../Types/images";
import {formatName} from "../Utils/utils";

export async function fetchPokemons(): Promise<Pokemon[]> {
    try {
        const response = await fetch(
            "https://unpkg.com/pokemons@1.1.0/pokemons.json"
        );

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const {results} = await response.json(); // Desestructuramos para mayor claridad

        // Mapear los resultados a un array del tipo `Pokemon`
        const pokemons: Pokemon[] = results.map((pokemon: any) => ({
            name: pokemon.name,
            id: pokemon.national_number,
            imgSrc: `https://img.pokemondb.net/sprites/black-white/anim/normal/${formatName(
                pokemon.name.toLowerCase()
            )}.gif`,
        }));
        // Eliminate duplicators Use un Map para Boost Speed
        const uniquePokemons = Array.from(
            new Map(pokemons.map((p) => [p.id, p])).values()
        );

        return uniquePokemons;
    } catch (error) {
        console.error("Error fetching pokemons:", error);
        throw error; // Relanzamos el error para que lo maneje el llamante
    }
}
