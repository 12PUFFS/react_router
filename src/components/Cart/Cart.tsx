import { useState, useContext } from 'react';
import './Cart.css';
import { CartContext } from '../../App';
import Modal from '../Modal/Modal';
import { Link } from 'react-router-dom';

export default function Cart() {
  const [activeCart, setActiveCart] = useState(false);

  const { cart, setModal, modal } = useContext(CartContext);

  const openModal = () => {
    setModal(true);
  };

  return (
    <div>
      {modal && <Modal onClose={() => setModal(false)} />}

      <div className="cartinochka">
        <p onClick={() => setActiveCart(!activeCart)} className="cart">
          моя корзина
        </p>
      </div>
      <span className="cart-count">{cart.length}</span>
      <div className={`ty ${activeCart ? 'active' : ''}`}>
        <div className="ol">
          <h2>Перейти в корзину</h2>
          <div className="cart-btns">
            <button onClick={openModal}>удалить все</button>
            <button
              onClick={() => setActiveCart(!activeCart)}
              className="close-btn"
            >
              X
            </button>
          </div>
        </div>
        <ul>
          {cart.length === 0 && <p className="empty-cart">корзина пуста</p>}
          {cart.map((item) => (
            <li key={item.id}>
              <Link to={`/item/${item.id}`}>
                <img className="pii" src={item.image} alt={item.title} />
                <div className="ll">
                  <h3>{item.title}</h3>
                  <p>{item.price} ₽</p>
                  <p>{item.rating}</p>
                </div>
              </Link>
              <button onClick={openModal}>удалить</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
