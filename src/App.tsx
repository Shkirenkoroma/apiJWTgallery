import { FC, useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Auth from './pages/auth';
import { useAppDispatch } from './features/hooks';
import Dashbord from './pages/dashbord';
import './App.css';
import { setUser } from './features/authSlice';

const App: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  useEffect(() => {
    dispatch(setUser(user));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Navigate to="/auth" replace />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashbord />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
