// export default () => {
//   return (
//     <Container className="text-center">
//       <h1 className="pt-5">
//         Biendenido a <span className="fw-bold">Dogstel</span>
//       </h1>
//       <h6> El mejor hotel para perros de la región </h6>
//     </Container>
//   );
// };

import React from "react";
import { Container } from "react-bootstrap";

const Home = () => {
    return (
        <Container className="text-center mt-5">
            <h1>Bienvenido maestro pokemon</h1>
            <img height={300} src="/picachu.png" alt="pikachu" />
        </Container>
    );
};

export default Home;
