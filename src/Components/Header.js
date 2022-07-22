import { AiOutlineCalculator } from 'react-icons/ai';
import Navbar from './Navbar';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <AiOutlineCalculator className="header__icon" />
      <Navbar />
    </div>
  );
};

export default Header;
