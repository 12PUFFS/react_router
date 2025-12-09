// src/components/Modal/Modal.tsx
import { useContext } from 'react';
import { CartContext } from '../../App';

export default function Modal() {
  // Удалите selectedSize из деструктуризации и JSX, если он не нужен
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Корзина</h3>
        {cart.length === 0 ? (
          <p>Корзина пуста</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div>
                  <h4>{item.title}</h4>
                  <p>Цена: {item.price} руб.</p>
                  {/* Удалите блок с selectedSize, если он не используется в данных */}
                  {/* или добавьте проверку на существование */}
                  {item.selectedSize && (
                    <p>
                      <strong>Размер: {item.selectedSize}</strong>
                    </p>
                  )}
                  <button onClick={() => removeFromCart(item.id)}>
                    Удалить
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
