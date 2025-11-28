import { useState } from 'react';
import products from '../../data';
import './Cart.css';

export default function Cart() {
  const [activeCart, setActiveCart] = useState(false);

  return (
    <div>
      <div className="cartinochka">
        <p onClick={() => setActiveCart(!activeCart)} className="cart">
          моя корзина
        </p>
      </div>
      <span className="cart-count">{products.length}</span>
      <div className={`ty ${activeCart ? 'active' : ''}`}>
        <div className="ol">
          <h2>корзина - {products.length}</h2>
          <div onClick={() => setActiveCart(!activeCart)} className="close-btn">
            X
          </div>
        </div>
        {products.length === 0 ? (
          <ul className="empty-cart">корзина пуста</ul>
        ) : (
          <ul>
            {products.map((item, index) => {
              return (
                <li key={item.id}>
                  <img className="pii" src={item.image} alt="" />
                  <div className="tt">
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                  </div>
                  <div className="btns">
                    <button>Купить</button>
                    <button>Удалить</button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
