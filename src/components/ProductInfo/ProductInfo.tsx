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

  if (!product.photos) {
    return (
      <div className="container">
        <div className="line">
          <button className="back-btn" onClick={() => back()}>
            назад
          </button>
          <h1 className="_error">404</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="line">
        <button className="back-btn" onClick={() => back()}>
          назад
        </button>
        <h1>{product.title}</h1>
      </div>
      <div className="info-wrapper">
        <div className="photo">
          <ul>
            {product.photos.map((i, index: number) => {
              return (
                <li key={index}>
                  <img src={i} alt="" />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="main">
          <div className="rewe">
            {product.photos.map((photo, index: number) => {
              return <img key={index} src={photo} alt="" />;
            })}
          </div>
        </div>
        <div className="full-info"></div>
      </div>
    </div>
  );
}

// <button onClick={() => addCart(product.id)} className="to-cart">
//   В корзину
// </button>
