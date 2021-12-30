import { useEffect, useState } from "react";

const PAGE_SIZE = 10;

export const useGetPokemonList = () => {
    const [pokemonList, setPokemonList] = useState()
    const [loading, setIsLoading] = useState(false);

    useEffect( () => {
        // we don't want this to run synchronously, so we make it an async function
        async function fetchData() {
            setIsLoading(true);
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${PAGE_SIZE}&offset=0`)
            const payload  = await response.json();
            setPokemonList(payload);
            setIsLoading(false);
        }
        fetchData();
    }, [PAGE_SIZE]);

    return {
        loading, 
        ...pokemonList
    };
      
}