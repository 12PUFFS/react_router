import Cart from '../Cart/Cart';
import './Header.css';

export default function Header() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="logo">Логотип</h1>
        <Cart />
      </header>
    </div>
  );
}
