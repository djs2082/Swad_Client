import React from 'react';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import './styles.scss';
import FooterElement from 'components/FooterElement/View';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  // import and initialize the viewModel
  // const viewModel = useSearchBarViewModel();

  return (
    <div className='footer-wrapper shadow-3xl bg-header-footer-light'>
      <FooterElement Icon={CurrencyRupeeIcon} text='Pay Bill' />
      <FooterElement Icon={ShoppingCartIcon} text='My Cart' />
      <FooterElement Icon={NotificationsActiveIcon} text='Ask Help' />
    </div>
  );
};

export default Footer;
