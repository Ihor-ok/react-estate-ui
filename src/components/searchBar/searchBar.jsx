import './searchBar.scss'
import searchImg from '../../icons/search.png'
import { useState } from 'react'

const types = ["buy", "rent"];


function SearchBar() {
    const [query, setQuery] = useState({
        type: "buy",
        location: "",
        minPrice: 0,
        maxPrice: 0,
    })

    const swichType = (val) => {
        setQuery(prev => ({...prev, type: val}))
    }

    return (
        <div className='searchBar'>
            <div className="type">
                {types.map((type) => (
                    <button key={type} onClick={() => swichType(type)} className={query.type === type ? "active" : ""}>{type}</button>
                ))}
                {/* <button onClick={()=> swichType("buy")}>Buy</button>
                <button onClick={()=> swichType("rent")}>Rent</button> */}
            </div>
            <form action="">
                <input type="text" name="location" placeholder='Citi Location' />
                <input type="number" name="minPrice" min={0} max={10000000} placeholder='Min Price' />
                <input type="number" name="maxPrice" min={0} max={10000000} placeholder='Max Price' />
                <button>
                    <img src={searchImg} alt="" />
                </button>
            </form>
        </div>
    )
}

export default SearchBar