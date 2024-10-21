export type Pokemon = {
    name: string;
    id: string;
    imgSrc: string;
};

// ../Types/images.ts
export type PokemonDetails = {
    name: string;
    id: number;
    imgSrc: string;
    hp?: number;
    attack?: number;
    defense?: number;
};
