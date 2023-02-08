
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer>
      <menu>
        <li className="img-footer">
          <img src={require('../assets/footer-logo.png')} alt="Little Lemon logo"></img>
        </li>
        <li className="Navigation">
          <h1 className="footer-header">Navigation</h1>
          <ul className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <a href={require('../assets/menu.webp')} target="_blank" rel="noreferrer">Menu</a>
            <Link to="/reservations">Reservations</Link>
            <Link to="/order">Order</Link>
            <Link to="/login">Login</Link>
          </ul>
        </li>

        <li className="contact">
          <h1 className="footer-header">Contact</h1>
          <ul className="footer-links">
            <li>South bombay</li>
            <li>Mumbai</li>
            <br></br>
            <li>(+91)-999-3257-001</li>
            <br></br>
            <a href="littlelemon.com" target="_blank" rel="noreferrer">contact@littlelemon.com</a>
          </ul>
        </li>
        <li>
          <h1 className="footer-header">Connect</h1>
          <ul className="footer-links">
            <a href="" target="_blank" rel="noreferrer">Facebook</a>
            <a href="" target="_blank" rel="noreferrer">Instagram</a>
            <a href="" target="_blank" rel="noreferrer">Join us!</a>
          </ul>
        </li>
      </menu>
    </footer>
  );
}