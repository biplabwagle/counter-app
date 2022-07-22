import { useSelector, useDispatch } from 'react-redux';
import './Counter.css';
const Counter = () => {
  const { user, isLoggedIn, counter } = useSelector((store) => store);
  const dispatch = useDispatch();
  const addHandler = () => {
    dispatch({
      type: 'Add',
    });
  };
  const subtractHandler = () => {
    dispatch({
      type: 'Subtract',
    });
  };
  return (
    <div className="counter">
      <h1 style={{ color: 'teal', fontSize: '4rem' }}>{counter}</h1>
      <button className="btn" onClick={addHandler}>
        Add
      </button>
      <button className="btn" onClick={subtractHandler}>
        Subtract
      </button>
    </div>
  );
};
export default Counter;
