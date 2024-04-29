import { listData } from 'components/lib/dummydata'
import './list.scss'
import Card from 'components/card/Card'

function List() {
    return (
        <div className='list'>
            {listData.map(item => (
                <Card key={item.id} item={item}/>
            ))}
        </div>
    )
}

export default List