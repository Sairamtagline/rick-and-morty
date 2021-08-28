import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Navbar } from "reactstrap";
import { navigationMenuList } from "./navigationMenuList";
import { Nav, NavItem } from 'reactstrap';
import { equal, location, ternary } from "../../util/javascript";


const Index = () => {
  const [loc, setLoc] = useState(location)

  return (
    <header>
      <Navbar light expand="md">
        <Container>
          <Nav className="justify-content-end w-100">
            {navigationMenuList.map(({ to, menu }, i) => (
              <NavItem key={i}>
                <Link to={to}
                  onClick={() => setLoc(to)}
                  className={ternary(equal(to, loc), 'active', '')}>
                  {menu}
                </Link>
              </NavItem>
            ))}
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Index;
