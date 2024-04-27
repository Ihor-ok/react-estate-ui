import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './map.scss'
import 'leaflet/dist/leaflet.css'
import Pin from 'components/pin/Pin'

const position = [51.505, -0.09]

function Map({ items }) {
    

    return (

//  <MapContainer center={[50.5074, -0.1278]} zoom={7} scrollWheelZoom={false} className='map'>
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
            
//       <Marker position={[51.5074, -0.1278]}>
//         <Popup>
//           A pretty CSS3 popup. <br /> Easily customizable.
//         </Popup>
//       </Marker>
//     </MapContainer>


    <MapContainer center={[52.505, -1.8]} zoom={7} scrollWheelZoom={false} className='map'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    /> 
               
    {items.map(item => (
        <Pin item={item} key={item.id} />
    ))}
  </MapContainer>
    )
}

export default Map