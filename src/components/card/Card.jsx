import { Link } from 'react-router-dom'
import './card.scss'
import pin from '../../icons/pin.png'

function Card({item}) {
    return (
        <div className="card">
            <Link to={`/${item.id}`} className='imageContainer'>
                <img src={item.img} alt="" />
            </Link>
            <div className="textContainer">
                <h2 className="title">
                    <Link to={`/${item.id}`}>{item.title }</Link>
                </h2>
                <p className='address'>
                    <img src={pin} alt="" />
                    <span>{item.address}</span>
                </p>
                <p className='price'>$ {item.price}</p>
                <div className='bottom'>
                    
                </div>
            </div>
        </div>
    )
}

export default Card