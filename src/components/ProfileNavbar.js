import React from "react";
import { Image } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { MdBeenhere } from "react-icons/md";


const ProfileNavbar = (props) => {
    return (
        <div>
            <div id="profileinfo">
                <Image id="profile" src="https://i.pinimg.com/originals/6c/0f/56/6c0f56bbe60aa6c72f384215326a0ca3.jpg" />
                <p id="username">UserName <MdBeenhere /></p>
                <Button className="btnEntrar" variant="light">Editar</Button>
            </div>
            <Navbar id="LogNavbar" variant="dark" expand="lg">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="/Profile">Likes</Nav.Link>
                        <Nav.Link href="/Lists">Listas</Nav.Link>
                        <Nav.Link href="/Following">Seguidos</Nav.Link>
                        <Nav.Link href="/Followers">Seguidores</Nav.Link>
                        <NavDropdown title="Opciones" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Nueva Lista</NavDropdown.Item>
                                <NavDropdown.Item href="#action5">Nueva Película/Serie</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Cerrar Sesión</NavDropdown.Item>
                            </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
            <hr className="hr"></hr>
        </div>
    )
}

export default ProfileNavbar;