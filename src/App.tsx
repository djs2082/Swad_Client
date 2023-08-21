import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Toasters from 'components/Toaster/View';
import Footer from 'components/Footer/View';
import LandingPage from 'components/LandingPage/View';
import Header from 'components/Header/View';
import './App.css';
import WelcomeHero from 'components/WelcomeHero/View';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const deviceHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    // Set the CSS variable
    document.documentElement.style.setProperty(
      '--device-height',
      `${deviceHeight}px`
    );

    setTimeout(() => {
      setLoading(false);
    }, 3000);
    // dispatch(showToaster({ message: 'Hello', type: 'error', timeout: 50000 }));
    // dispatch(
    //   showToaster({ message: 'Hello World', type: 'success', timeout: 50000 })
    // );
  }, []);

  return (
    <div className='App bg-theme-color'>
      <Toasters />
      <div className='components-wrapper'>
        <Header />
        <Routes>
          <Route
            path='/:restarurant_name/:table_number'
            element={
              loading ? (
                <WelcomeHero />
              ) : (
                // <PageWrapper>
                <LandingPage />
                // <PageWrapper/>
              )
            }
          />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
