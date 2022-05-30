import './burger-icon.scss';
const BurgerIcon = ({ isMobileOpen }) => {
  return (
    <div className={isMobileOpen ? 'hamburger open' : 'hamburger'}>
      <span className='hamburger-top'></span>
      <span className='hamburger-middle'></span>
      <span className='hamburger-bottom'></span>
    </div>
  );
};

export default BurgerIcon;
