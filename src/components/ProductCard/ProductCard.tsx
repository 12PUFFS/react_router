import './ProductCard.css';
import type { Product } from '../../data';
// import { useContext } from 'react';
// import { CartContext } from '../../App';
import { Link } from 'react-router-dom';

interface TypeOfProduct {
  product: Product;
  index: number;
}

export default function ProductCard({ product }: TypeOfProduct) {
  // const { addCart } = useContext(CartContext);

  return (
    <div className="sneaker-card">
      <img className="sneaker-image" src={product.image} alt="" />
      <h4 data-rating={product.rating} className="rating">
        {product.rating}
      </h4>

      <div className="sneaker-info">
        <h2 className="sneaker-price">{product.price} ₽</h2>
        <h3 className="sneaker-title">{product.title}</h3>
        <Link to={`/item/${product.id} `}>
          <button>Подробнее</button>
        </Link>
      </div>
    </div>
  );
}
