import './Navbar.css';
import { AiFillHome } from 'react-icons/ai';
import { FiLogIn } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
const Navbar = () => {
  const { user, isLoggedIn } = useSelector((state) => state);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch({
      type: 'logout',
      payload: {
        user: '',
        login: false,
      },
    });
  };
  return (
    <nav className="header__navbar">
      <button className="header__navbar__item">
        <AiFillHome />
        <NavLink to={isLoggedIn ? '/counter' : '/'} className="item__link">
          {isLoggedIn ? 'Counter' : 'Home'}
        </NavLink>
      </button>
      <button className="header__navbar__item">
        <FiLogIn />
        {user ? (
          <NavLink to="/" className="item__link" onClick={logoutHandler}>
            Logout
          </NavLink>
        ) : (
          <NavLink to="/login" className="item__link">
            Login
          </NavLink>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
