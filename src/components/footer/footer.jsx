import './footer.styles.scss';
import { BsTwitter, BsInstagram, BsFacebook } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Address from '../address/address';
import MessageForm from '../message-form/message-form';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='media'>
        <div className='logo'>
          <BsFacebook className='footer-logo' size={40} />
        </div>
        <div className='logo'>
          <BsInstagram className='footer-logo' size={40} />
        </div>
        <div className='logo'>
          <BsTwitter className='footer-logo' size={40} />
        </div>
      </div>
      <div className='footer-container__grid'>
        <div className='footer-container__content'>
          <h2>Products</h2>
          <div className='footer-links'>
            <Link to='/burgers'>Burgers</Link>
            <Link to='/salads'>Salads</Link>
            <Link to='/drinks'>Drinks</Link>
          </div>
        </div>
        <div className='footer-container__content'>
          <h2>You can find us at: </h2>
          <div className='footer-container__content__address'>
            <Address />
          </div>
        </div>
        <div className='footer-container__content'>
          <h2>Contact us:</h2>
          <MessageForm />
        </div>
      </div>
    </div>
  );
};

export default Footer;
