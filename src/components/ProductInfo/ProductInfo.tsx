import { useNavigate, useParams } from 'react-router-dom';
import products from '../../data';
import type { Product } from '../../data';

import './ProductInfo.css';

export default function ProductInfo() {
  const { id } = useParams();
  const product = products.find((item: Product) => item.id === parseInt(id));
  const navigate = useNavigate();

  if (!product) {
    console.log(product);
    return <div>Товар не найден</div>;
  }

  const back = () => {
    navigate(-1);
  };

  return (
    <div className="container">
      <div className="details">
        <button className="back-btn" onClick={() => back()}>
          назад
        </button>
        <div className="main-content">
          <div className="img">
            <img src={product.image} alt="" />
          </div>

          <p>{product.title}</p>
          {product.fulldesc}
        </div>
      </div>
    </div>
  );
}
