import React from 'react';
import './styles.css';
import { IconButton } from '@mui/material';

interface IconProps {
  sx: object;
  className: string;
}

interface MenuTileProps {
  Icon: React.FC<IconProps>;
  text: string;
}

const MenuTile: React.FC<MenuTileProps> = ({ Icon, text }) => {
  // import and initialize the viewModel
  // const viewModel = useSearchBarViewModel();

  return (
    <div className='menu-tile-wrapper border-4 border-black-500 bg-tertiary'>
      <IconButton>
        <Icon className='text-secondary' sx={{ fontSize: '64px' }} />
      </IconButton>
      <span style={{ fontSize: '16px' }} className='text-primary'>
        {text}
      </span>
    </div>
  );
};

export default MenuTile;
