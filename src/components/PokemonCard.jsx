import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
    const navigate = useNavigate();
    const volver = () => navigate("/pokemones");

    const { name, stats, src } = pokemon;
    return (
        <Card style={{ width: "18rem" }} className="mt-5 mx-auto p-3">
            <Card.Title className="mt-3 fs-1">{name}</Card.Title>
            <Card.Img variant="top" src={src} />
            <Card.Body>
                <Card.Text>Habilidades:</Card.Text>
                <ListGroup variant="flush">
                    {stats?.map((stat, index) => (
                        <ListGroup.Item key={index}>
                            {stat.name}: {stat.base}{" "}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card.Body>

            <Button className="btn btn-outlander-dark" onClick={volver}>
                {" "}
                Seleccionar otro
            </Button>
        </Card>
    );
};

export default PokemonCard;
