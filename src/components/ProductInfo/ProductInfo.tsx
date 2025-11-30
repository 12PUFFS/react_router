import { useNavigate, useParams } from 'react-router-dom';
import products from '../../data';
import type { Product } from '../../data';

import './ProductInfo.css';
import { useContext } from 'react';
import { CartContext } from '../../App';

export default function ProductInfo() {
  const { id } = useParams();
  const product = products.find((item: Product) => item.id === parseInt(id));
  const navigate = useNavigate();

  const { addCart } = useContext(CartContext);

  if (!product) {
    console.log(product);
    return <div>Товар не найден</div>;
  }

  const back = () => {
    navigate(-1);
  };

  return (
    <div className="container">
      <button className="back-btn" onClick={() => back()}>
        назад
      </button>
      <div className="info-wrapper">
        <div className="photo">
          <ul>
            <li>
              <img src={product.image} alt="" />
            </li>
          </ul>
        </div>
        <div className="main">
          <img src={product.image} alt="" />
        </div>
        <div className="full-info"></div>
      </div>
    </div>
  );
}

// <button onClick={() => addCart(product.id)} className="to-cart">
//   В корзину
// </button>
