import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Pokemones = () => {
    const [pokemones, setPokemones] = useState([]);
    const [pokemonSelected, setPokemonSelected] = useState([]);
    const navigate = useNavigate();
    const url = "https://pokeapi.co/api/v2/pokemon";

    const getPokemon = async () => {
        const res = await fetch(url);
        const { results } = await res.json();
        setPokemones(results);
    };

    //funcion nos redirige a la pagina detalle cuando haya un poquemon seleccionado
    const goToPokemonDetail = async () => {
        if (!pokemonSelected) {
            alert("selecciona un pokemon");
        } else {
            navigate(`/pokemones/${pokemonSelected}`);
        }
    };

    //llamamos a la lista de pokemones cuando el componente renderiza solo 1 vez.
    useEffect(() => {
        getPokemon();
    }, []);

    return (
        <Container className="text-center mt-5">
            <h1>Selecciona un pokemon</h1>
            <div className="col-10 col-sm-3 col-lg-4 mx-auto">
                <select
                    value={pokemonSelected}
                    className="form-select text-center"
                    onChange={({ target }) => setPokemonSelected(target.value)}>
                    <option value="" disabled>
                        Pokemones
                    </option>
                    {pokemones.map(({ name }) => (
                        <option value={name}>{name}</option>
                    ))}
                </select>
                <Button
                    variant="outline-dark"
                    onClick={goToPokemonDetail}
                    className="mt-3">
                    Ver Detalle
                </Button>
            </div>
        </Container>
    );
};

export default Pokemones;
