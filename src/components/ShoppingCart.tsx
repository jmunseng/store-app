import React from 'react';
import { Offcanvas, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartProvider';
import formatCurrency from '../utilities/formatCurrency';
import CartItem from './CartItem';
import storeItems from '../data/items.json';

type ShoppingCartProps = {
  isOpen: boolean;
};

const ShoppingCart: React.FC<ShoppingCartProps> = ({ isOpen }) => {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems?.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{'  '}
            {formatCurrency(
              cartItems?.reduce((totle, cartItem) => {
                const item = storeItems.find((i) => i.id === cartItem.id);
                return totle + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
