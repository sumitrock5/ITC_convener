import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'

const Navigation=({onRouteChange})=>{
    return(
        <div className="" >
            <Navbar expand="xl" fixed="top" variant="dark" bg="dark">
                <Container>
                    <Navbar.Brand className="pointer" onClick={() => onRouteChange(0)}>Home</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}
export default Navigation;