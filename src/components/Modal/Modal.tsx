import { useContext } from 'react';
import './Modal.css';
import { CartContext } from '../../App';

interface ModalType {
  onClose: () => void;
}

export default function Modal({ onClose }: ModalType) {
  const { cart, removeFromCart, selectedSize } = useContext(CartContext);

  return (
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal-text">
          <h3>Выберите товар для удаления:</h3>
          {cart.map((item) => (
            <div key={item.id} className="modal-item">
              <img src={item.image} alt="" />
              <span>{item.title}</span>
              {item.selectedSize && (
                <p>
                  <strong>Размер: {item.selectedSize}</strong>
                </p>
              )}
              <button onClick={() => removeFromCart(item.id)}>удалить</button>
            </div>
          ))}
          <div className="modal-btn">
            <button onClick={onClose}>отмена</button>
          </div>
        </div>
      </div>
    </div>
  );
}
