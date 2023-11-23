import { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Auth from './pages/auth';
import Dashbord from './pages/dashbord';
import './App.css';

const App: FC = (): JSX.Element => {
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
