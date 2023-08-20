import React from 'react';
import './styles.css';
import SearchBar from 'components/SearchBar/View';
import MenuTile from 'components/MenuTile/View';
import WineBarIcon from '@mui/icons-material/WineBar';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import IcecreamIcon from '@mui/icons-material/Icecream';

interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = () => {
  // import and initialize the viewModel
  // const viewModel = useSearchBarViewModel();

  return (
    <div className='landing-page-wrapper'>
      <div className='search-bar-section'>
        <SearchBar />
      </div>
      <div className='menu-tiles-section shadow-md'>
        {' '}
        <MenuTile Icon={RamenDiningIcon} text='Starters' />
        <MenuTile Icon={RestaurantMenuIcon} text='Main Course' />
        <MenuTile Icon={IcecreamIcon} text='Dessert' />
        <MenuTile Icon={WineBarIcon} text='Beverages' />
      </div>
    </div>
  );
};

export default LandingPage;
