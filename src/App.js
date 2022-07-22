import './App.css';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Login from './Components/Login';
import Error from './Components/Error';
import Protected from './Components/Protected';
import Counter from './Components/Counter';
function App() {
  const { isLoggedIn } = useSelector((store) => store);
  return (
    <div className="app">
      <Header />
      <Routes>
        {/* Header */}
        <Route path="/" element={<Banner />} />
        {/* login page */}
        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />
        {/* Body */}
        <Route
          path="/counter"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Counter />
            </Protected>
          }
        />

        {/* Error */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
