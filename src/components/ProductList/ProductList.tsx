import { useContext, useEffect, useState } from 'react';

import ProductCard from '../ProductCard/ProductCard';

import './ProductList.css';
import products from '../../data';
import type { Product } from '../../data';

import Loading from '../Loading/Loading';
import EmptyProductList from './EmptyProductList';
import { Link } from 'react-router-dom';
import { CartContext } from '../../App';

export default function ProductList() {
  const [items, setItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState('all');
  const [searchValue, setSearchValue] = useState('');

  const { newProductBanner } = useContext(CartContext);

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

  // const newProductBanner = products.find((i) => {
  //   return i.status === 'new';
  // });

  return (
    <>
      <div className="container">
        <div className="banner">
          <div className="banner-title">
            <h3>Легендарные модели</h3>
          </div>
          <div className="options">
            <div className="div-prev">
              <button>←</button>
            </div>
            <div className="div-next">
              <button>→</button>
            </div>
          </div>
          <Link to={`/item/${newProductBanner?.id || '1'}`}>
            <img src={newProductBanner?.image || ''} alt="" />
          </Link>
        </div>
        <div className="wrapper">
          <div className="filters">тут фильтры</div>
          <div className="list">
            <div className="indiv">
              <input
                onChange={handleSearch}
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
              <div className="price-filter">
                <div>фильтры по цене</div>
              </div>
            </div>

            <ul className="all-sneakers-grid">
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
      </div>
      <footer className="footer">wwarwetrgth</footer>
    </>
  );
}
