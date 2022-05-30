import './location-component.styles.scss';
import LocationMap from '../../assets/map.png';
import Address from '../address/address';

const LocationComponent = () => {
  return (
    <div className='location-container'>
      <h1>Our Location</h1>

      <div className='details'>
        <div className='left'>
          <Address />
        </div>

        <div className='right'>
          <img src={LocationMap} alt='map' />
        </div>
      </div>
    </div>
  );
};

export default LocationComponent;
