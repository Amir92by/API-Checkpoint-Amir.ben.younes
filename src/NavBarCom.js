import React from 'react'
import { Container,Navbar } from "react-bootstrap";


const NavBarCom = () => {
    return (
        <Navbar sticky='top' bg='info' variant='dark' >
          <Container >
            <Navbar.Brand href ='#home' style={{fontSize:'25px',fontWeight:'bold'}}>Contact OF Users</Navbar.Brand>
          </Container>
        </Navbar>
    )
}

export default NavBarCom
