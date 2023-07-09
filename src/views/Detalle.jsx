import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";

const Detalle = () => {
    //va a buscar a la ruta los parametros que le estamos pasando
    const { name } = useParams();
    const [pokemon, setPokemon] = useState({});
    const url = "https://pokeapi.co/api/v2/pokemon";

    const getPokemon = async (name) => {
        const res = await fetch(`${url}/${name}`);
        const data = await res.json();
        const src = data.sprites.other.dream_world.front_default;
        const stats = data.stats.map((stat) => ({
            name: stat.stat.name,
            base: stat.base_stat,
        }));

        setPokemon({ name, stats, src });
    };

    useEffect(() => {
        getPokemon(name);
    }, [name]); //cada vez que (name) valor recibido por useParams cambie se ejecutara el useEffect

    return (
        <Container className="text-center mt-5">
            <PokemonCard pokemon={pokemon} />
        </Container>
    );
};

export default Detalle;
