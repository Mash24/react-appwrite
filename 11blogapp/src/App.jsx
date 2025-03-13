import { useState, useEffect } from 'react';
import LoginPage from './pages/LoginPage'; // Importing the LoginPage component
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { login as authLogin, logout } from "./Store/authSlice";
import Header from "./Components/Header/Header"
import Footer from "./Footer/Footer"
import authService from './appwrite/auth'
import Logo from "./Components/Logo"


function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

    useEffect(() => {
        authService
            .getCurrentUser()
            .then((userData) => {
                if (userData) dispatch(authLogin({ userData }));
                else dispatch(logout());
            })
            .finally(() => setLoading(false));
    }, [dispatch]);

    return !loading ? (
      <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
          <div className="w-full block">
              <Header />
              <main>
                  <Outlet />
              </main>
          </div>
          <div className="w-full block">
              <Footer />
          </div>
      </div>
  ) : null;
}

export default App
