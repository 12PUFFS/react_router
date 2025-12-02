import './ProductCard.css';
import type { Product } from '../../data';
import { useContext } from 'react';
import { CartContext } from '../../App';
import { Link } from 'react-router-dom';

interface TypeOfProduct {
  product: Product;
  index: number;
}

export default function ProductCard({ product }: TypeOfProduct) {
  const { addCart } = useContext(CartContext);

  return (
    <div className="card">
      <Link to={`/item/${product.id} `}>
        <img src={product.image} alt="" />
        <h4 className="rating">{product.rating}</h4>
      </Link>
      <div className="card-desc">
        <h2>{product.price} ₽</h2>
        <h3>{product.title}</h3>
        <button onClick={() => addCart(product.id)} className="to-cart">
          В корзину
        </button>
      </div>
    </div>
  );
}
