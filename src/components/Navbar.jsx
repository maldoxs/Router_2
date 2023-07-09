import { NavLink } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
export default function Navigation() {
    const setActiveClass = ({ isActive }) =>
        isActive
            ? "text-white ms-3 text-decoration-none p-4 active"
            : "text-white ms-3 text-decoration-none p-4";
    return (
        <>
            <Navbar variant="dark" className="colorFondo">
                <Container className="justify-content-start">
                    <Navbar.Text>
                        <img height={53} src="/logo2.jpg" alt="logo" />
                    </Navbar.Text>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <NavLink to="/" className={setActiveClass}>
                                Home
                            </NavLink>
                            <NavLink to="/pokemones" className={setActiveClass}>
                                Pokemones
                            </NavLink>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
