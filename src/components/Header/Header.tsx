import Cart from '../Cart/Cart';
import './Header.css';
import heartIcon from '../../assets/heart.png';

export default function Header() {
  return (
    <>
      <div className="pre-header">Найди свою идеальную пару</div>
      <header className="header">
        <div className="menu">
          <ul>
            <li>
              <img className="hearti" src={heartIcon} alt="" />
            </li>
          </ul>
        </div>
        <Cart />
      </header>
    </>
  );
}
