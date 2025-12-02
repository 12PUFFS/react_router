import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import ProductInfo from './components/ProductInfo/ProductInfo';
import { createContext, useState } from 'react';
import products, { type Product } from './data';
import Cart from './components/Cart/Cart';

interface SetCart {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  addCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  deleteAllCart: () => void;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  modal: boolean;
}
export const CartContext = createContext<SetCart>({
  cart: [],
  setCart: () => {},
  addCart: () => {},
  removeFromCart: () => {},
  deleteAllCart: () => {},
  setModal: () => {},
  modal: false,
});

export default function App() {
  const [cart, setCart] = useState<Product[]>([]);
  const [modal, setModal] = useState(false);

  const addCart = (id: number) => {
    const product = products.find((i) => i.id === id);
    setCart((prev) => {
      if (!prev.find((item) => item.id === id)) {
        return [...prev, product];
      }
      return prev;
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
    if (cart.length === 1) {
      setModal(false);
    }
  };

  const deleleAllCart = () => {
    setCart([]);
    setModal(false);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addCart,
        removeFromCart,
        deleleAllCart,
        setModal,
        modal,
      }}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/item/:id" element={<ProductInfo />}>
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}
