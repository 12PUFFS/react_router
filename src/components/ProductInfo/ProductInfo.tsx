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
        <div className="full-info">
          <div className="full-text">
            <div className="current-color">
              <p>{product.price}</p>
              <p>текущая расцветка:</p>
              <img className="current-color-img" src={product.image} alt="" />
            </div>
            <div className="main-btn">
              <button
                onClick={() => alert(`Ура, ты купил ${product.title}`)}
                className="to-buy"
              >
                Купить
              </button>
              <button onClick={() => addCart(product.id)} className="to-cart">
                В корзину
              </button>
            </div>
          </div>
          <div className="full-desc">
            <ul>
              Описание
              {product.desc.map((item, index: number) => {
                return <li key={index}>-{item}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
