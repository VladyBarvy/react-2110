import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">Конвертер</Link>
    <Link to="/rates">Курсы валют</Link>
  </nav>
);

export default Navbar;
