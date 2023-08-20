import React from 'react';
import './styles.scss';

interface IconProps {
  className: string;
}

interface FooterElementProps {
  Icon: React.FC<IconProps>;
  text: string;
}

const FooterElement: React.FC<FooterElementProps> = ({ Icon, text }) => {
  // import and initialize the viewModel
  // const viewModel = useSearchBarViewModel();

  return (
    <span className='footer-item bg-tertiary'>
      <Icon className='text-secondary' />
      <span className='text-primary'>{text}</span>
    </span>
  );
};

export default FooterElement;
