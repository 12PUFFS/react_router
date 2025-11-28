import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import ProductInfo from './components/ProductInfo/ProductInfo';

export default function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/item/:id" element={<ProductInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
