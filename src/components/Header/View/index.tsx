import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';

import './styles.css';

interface FooterProps {}

const Header: React.FC<FooterProps> = () => {
  // import and initialize the viewModel
  // const viewModel = useSearchBarViewModel();

  return (
    <div className='header-wrapper shadow-3xl bg-header-footer-light'>
      <div className='header-info-left'>
        <div className='header-info-left-top h-[36px]'>
          <IconButton className='!text-primary'>
            <HomeIcon />
          </IconButton>
          <div className='font-bold'>Navdurga Restaurant</div>
        </div>
        <div className='header-info-left-bottom h-[20px]'>
          <div className='leading-[21px] pl-s text-inactive-grey truncate'>
            Near Bokare Hospital, Dr Lane, Nanded
          </div>
        </div>
      </div>
      <div className='header-info-right'>
        <IconButton className='!text-primary'>
          <AccountCircleIcon sx={{ fontSize: '44px' }} />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
