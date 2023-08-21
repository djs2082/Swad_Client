import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Toasters from 'components/Toaster/View';
import Footer from 'components/Footer/View';
import LandingPage from 'components/LandingPage/View';
import Header from 'components/Header/View';
import './App.css';
import WelcomeHero from 'components/WelcomeHero/View';
import useAppViewModel from 'common/ViewModel/AppViewModel';

const App: React.FC = () => {
  const { setDeviceWidthAndHeight, addSessionDataToStore, loading } =
    useAppViewModel();

  useEffect(() => {
    setDeviceWidthAndHeight();
    addSessionDataToStore();
  }, []);

  return (
    <div className='App bg-theme-color'>
      <Toasters />
      <div className='components-wrapper'>
        <Header />
        <Routes>
          <Route
            path='/'
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
