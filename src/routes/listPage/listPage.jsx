import { listData } from 'components/lib/dummydata'
import './listPage.scss'
import Filter from 'components/filter/Filter'
import Card from 'components/card/Card'
import Map from './map/Map'

function ListPage() {

    const data = listData

    return (
        <div className="listPage">
            <div className="listContainer">
                <div className='wrapper'>
                    <Filter />
                    {data.map(item => (
                        <Card key={item.id} item={ item } />
                    ))}
                </div>
            </div>
            <div className="mapContainer">
                <Map items={data}></Map>
            </div>
        </div>
    )
}

export default ListPage