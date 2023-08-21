import React from 'react';
import welcome from 'assets/images/welcome_hero.jpg';
import welcomeCook from 'assets/gifs/welcome_hero.gif';
import './styles.css';

// const welcomeImage = require('./welcome-hero.jpg');

interface WelcomeHeroProps {}

const WelcomeHero: React.FC<WelcomeHeroProps> = () => {
  // import and initialize the viewModel
  // const viewModel = useSearchBarViewModel();

  return (
    <div className='welcome-hero'>
      <img src={welcome} className='w-full h-full' alt='Welcome Hero' />
      <div className='welcome-hero-text absolute top-[50%] left-[50%] text-center bg-black bg-opacity-90 p-s text-white transform translate-x-[-50%] translate-y-[-50%]'>
        <p className='text-xl4 animate-typing'>
          Welcome to Navdurga Restaurant
        </p>
        <p className='text-lg'>
          <em>&rdquo;Where swad meets the Perfection&rdquo;</em>
        </p>
        <img src={welcomeCook} className='' alt='Cooking GIF' />
      </div>
    </div>
  );
};

export default WelcomeHero;
