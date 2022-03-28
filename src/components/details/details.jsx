import './details.styles.scss'
import { Link } from 'react-router-dom'
import DetailsComponent from './details.component'
import background from '../../assets/about-photo.png'

export default function Details() {

  return (
    <div className='details-container' >
    <DetailsComponent background={background} link={'./aboutus'} > About us </DetailsComponent>
        <div className="details-middle">
        <Link to='./history'>History</Link>
        </div>
        <div className="details-right">
        <Link to='./media'>Media</Link>
        </div>
    </div>
  )
}
