import './singlePage.scss'
import Slider from './slider/Slider'
import { singlePostData, userData } from '../lib/dummydata'
import pin from '../../icons/pin.png'
import Map from 'routes/listPage/map/Map'
import chat from '../../icons/chat.png'
import save from '../../icons/save.png'
import utility from '../../icons/utility.png'
import pet from '../../icons/pet.png'
import fee from '../../icons/fee.png'
import size from '../../icons/size.png'
import bed from '../../icons/bed.png'
import bath from '../../icons/bath.png'
import school from '../../icons/school.png'
import 'leaflet/dist/leaflet.css'





function SinglePage() {
    console.log(singlePostData.images);
    return (
        <div className="singlePage">
            <div className="details">
                <div className="wrapper">
                    <Slider images={singlePostData.images} />
                    <div className="info">
                        <div className="top">
                            <div className="post">
                                <h1>{singlePostData.title}</h1>
                                <div className="address">
                                    <img src={pin} alt="" />
                                    <span>{singlePostData.address }</span>
                                </div>
                                <div className="price">$ {singlePostData.price }</div>
                            </div>
                            <div className="user">
                                <img src={userData.img} alt="" />
                                <span>{userData.name }</span>
                            </div>
                        </div>
                        <div className="bottom">
                            {singlePostData.description}
                        </div>
                    </div>
                </div>
            </div>
            <div className="features">
                <div className="wrapper">
                    <p className='title'>General</p>
                        <div className="listVertical">
                                <div className="feature">
                                    <img src={utility} alt="" />
                                    <div className="featureText">
                                        <span>Utilities</span>
                                        <p>Renter is responsible</p>
                                    </div>
                                </div>
                                <div className="feature">
                                <img src={pet} alt="" />
                                <div className="featureText">
                                    <span>Pet Policy</span>
                                    <p>Pets Allowed</p>
                                </div>
                            </div>
                            <div className="feature">
                                <img src={fee} alt="" />
                                <div className="featureText">
                                    <span>Property Fees</span>
                                    <p>Must have 3x the rent in total household income</p>
                                </div>
                            </div>
                        </div>
                        <p className='title'>Room size</p>
                            <div className="sizes">
                                <div className="size">
                                    <img src={size} alt="" />
                                    <span>80 sqft</span>
                                </div>
                                <div className="size">
                                    <img src={bed} alt="" />
                                    <span>2 beds</span>
                                </div>
                                <div className="size">
                                    <img src={bath} alt="" />
                                    <span>1 bathroom</span>
                                </div>
                            </div>
                            <p className='title'>Nearby Places</p>
                            <div className="listHorizontal">
                                    <div className="feature">
                                        <img src={school} alt="" />
                                        <div className="featureText">
                                            <span>school</span>
                                            <p>250m away</p>
                                        </div>
                                    </div>
                                    <div className="feature">
                                        <img src={pet} alt="" />
                                        <div className="featureText">
                                            <span>Bus Stop</span>
                                            <p>100m away</p>
                                        </div>
                                    </div>
                                    <div className="feature">
                                        <img src={fee} alt="" />
                                        <div className="featureText">
                                            <span>Restaurant</span>
                                            <p>200m away</p>
                                        </div>
                                    </div>
                            </div>
                   
                    <p className='title'>Location</p>
                    <div className="mapContainer">
                        <Map items={[singlePostData] } />
                    </div>
                    <div className="buttons">
                        <button>
                            <img src={chat} alt="" />
                            Send a Massage
                        </button>
                         <button>
                            <img src={save} alt="" />
                            Save the Place
                        </button>
                    </div>

                </div>
            </div>

       </div>
    )
}

export default SinglePage