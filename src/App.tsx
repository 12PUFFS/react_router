import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import ProductInfo from './components/ProductInfo/ProductInfo';
import { createContext, useState } from 'react';
import products from './data';
import Cart from './components/Cart/Cart';

export const CartContext = createContext();

export default function App() {
  const [cart, setCart] = useState([]);
  const [modal, setModal] = useState(false);
  const addCart = (id) => {
    const product = products.find((i) => i.id === id);
    setCart((prev) => {
      if (!prev.find((item) => item.id === id)) {
        // Если НЕТ в корзине
        return [...prev, product]; // Тогда добавляем
      }
      return prev; // Уже есть - не добавляем
    });
  };

  const removeFromCart = (id) => {
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
            <Route path="cart" element={<Cart />} /> {/* /item/1/cart */}
          </Route>
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}
