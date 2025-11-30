import { useEffect, useState, useContext } from 'react';
// import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';

import './ProductList.css';
import products from '../../data';
import type { Product } from '../../data';
// import ProductInfo from '../ProductInfo/ProductInfo';
import Loading from '../Loading/Loading';
import EmptyProductList from './EmptyProductList';
import { CartContext } from '../../App';

export default function ProductList() {
  const [items, setItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState('all');
  const [searchValue, setSearchValue] = useState('');
  // const {addCart} = useContext(CartContext)

  useEffect(() => {
    setTimeout(() => {
      setItems(products);
      setLoading(false);
    }, 500);
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const filtredItems = items.filter((item) => {
    return (
      item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.description.toLowerCase().includes(searchValue.toLowerCase())
    );
  });

  if (loading) {
    return <Loading setActive={setActive} active={active} />;
  }

  if (filtredItems.length === 0) {
    return <EmptyProductList setActive={setActive} active={active} />;
  }

  return (
    <div className="wrapper container">
      <div className="filters">тут фильтры</div>
      <div className="list">
        <div className="indiv">
          <input
            onKeyPress={handleSearch}
            type="text"
            placeholder="Что ищем?"
          />
          <p
            onClick={() => setActive('all')}
            className={`f ${active === 'all' ? 'active' : ''}`}
          >
            все
          </p>
          <p
            onClick={() => setActive('hits')}
            className={`f ${active === 'hits' ? 'active' : ''}`}
          >
            хиты
          </p>
          <p
            onClick={() => setActive('new')}
            className={`f ${active === 'new' ? 'active' : ''}`}
          >
            новое
          </p>
        </div>

        <ul>
          {filtredItems.map((item, index: number) => {
            return (
              <li key={item.id}>
                <ProductCard product={item} index={index} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
