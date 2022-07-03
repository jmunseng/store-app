import { createContext } from 'react';

export type CartItem = {
  id: number;
  quantity: number;
};

export type ShoppingCartContextProps = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;

  cartQuantity: number;
  cartItems: CartItem[];
};

export const ShoppingCartContext = createContext(
  {} as ShoppingCartContextProps
);
