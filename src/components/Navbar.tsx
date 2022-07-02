import { NavLink } from 'react-router-dom';
import { BsFillCartFill } from 'react-icons/bs';
import { useShoppingCart } from '../context/ShoppingCartContext';

import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';

const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          style={{ width: '3rem', height: '3rem', position: 'relative' }}
          variant="outline-primary"
          className="rounded-circle"
          onClick={openCart}
        >
          <BsFillCartFill size={25} style={{ marginLeft: '-2px' }} />
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: 'white',
              width: '1.5rem',
              height: '1.5rem',
              position: 'absolute',
              top: 0,
              right: 0,
              transform: 'translate(45%,-20%)',
            }}
          >
            {cartQuantity}
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
