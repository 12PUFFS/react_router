import Cart from '../Cart/Cart';
import './Header.css';
import heartIcon from '../../assets/heart.png';

export default function Header() {
  return (
    <header className="header">
      <h1 className="logo">SneakerLand</h1>
      <div className="menu">
        <ul>
          <li>
            <img className="heart" src={heartIcon} alt="" />
          </li>
        </ul>
      </div>
      <Cart />
    </header>
  );
}
