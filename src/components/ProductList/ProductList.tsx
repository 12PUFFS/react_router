import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';

import './ProductList.css';
import products from '../../data';
import type { Product } from '../../data';
import ProductInfo from '../ProductInfo/ProductInfo';
import Loading from '../Loading/Loading';
import EmptyProductList from './EmptyProductList';

export default function ProductList() {
  const [items, setItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState('all');

  useEffect(() => {
    setTimeout(() => {
      setItems(products);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return <Loading setActive={setActive} active={active} />;
  }

  if (items.length === 0) {
    return <EmptyProductList setActive={setActive} active={active} />;
  }

  return (
    <div className="wrapper container">
      <div className="filters">тут фильтры</div>
      <div className="list">
        <div className="indiv">
          <input type="text" placeholder="Что ищем?" />
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
          {items.map((item, index: number) => {
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
