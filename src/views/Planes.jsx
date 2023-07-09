import { Container } from "react-bootstrap";

import Planes from "../components/Planes";

export default () => {
  return (
    <Container className="pt-5">
      <h1 className="mb-4">Tenemos planes especiales para ti y su mascota</h1>
      <Planes />
    </Container>
  );
};
