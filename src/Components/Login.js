import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginHandler = (e) => {
    e.preventDefault();
    if (e.target.username.value) {
      dispatch({
        type: 'login',
        payload: {
          user: e.target.username.value,
          login: true,
        },
      });
      navigate('/counter');
    }
    return;
  };
  return (
    <div className="login" onSubmit={loginHandler}>
      <form className="login__form">
        <input
          type="text"
          className="login__form__input"
          placeholder="Please input a username"
          name="username"
          required
        />
        <button className="login__form__button">Login</button>
      </form>
    </div>
  );
};

export default Login;
