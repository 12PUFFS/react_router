import { useContext } from 'react';
import './Modal.css';
import { CartContext } from '../../App';

export default function Modal({ onClose }) {
  // ✅ Добавляем пропс onClose
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal-text">
          <h3>Выберите товар для удаления:</h3>
          {cart.map((item) => (
            <div key={item.id} className="modal-item">
              <img src={item.image} alt="" />
              <span>{item.title}</span>
              <button onClick={() => removeFromCart(item.id)}>удалить</button>
            </div>
          ))}
          <div className="modal-btn">
            <button onClick={onClose}>отмена</button>
            {/* ✅ Используем onClose */}
          </div>
        </div>
      </div>
    </div>
  );
}
