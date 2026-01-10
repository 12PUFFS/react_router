import { Link } from 'react-router-dom';
import './Cart.css';
import { useContext } from 'react';
import { CartContext } from '../../App'; // импортируйте ваш контекст
export default function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <>
      <div className="container">
        <Link to={'/'}>
          <button className="back-btn">назад</button>
        </Link>
        <h1>Корзина</h1>
        <ul>
          {cart.map((i) => {
            return (
              <li className="rtrtyr">
                {i.title}
                <img src={i.image} alt="" />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
