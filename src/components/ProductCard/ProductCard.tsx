import './ProductCard.css';
import type { Product } from '../../data';
import Cart from '../Cart/Cart';

interface TypeOfProduct {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: TypeOfProduct) {
  return (
    <div className="card">
      <img src={product.image} alt="" />

      <div className="card-desc">
        <h2>{product.price} ₽</h2>
        <h3>{product.title}</h3>

        <button className="to-cart">В корзину</button>
      </div>
    </div>
  );
}
