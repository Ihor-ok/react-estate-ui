import './homePage.scss'
import img from '../../icons/bg.png'
import SearchBar from 'components/searchBar/searchBar'

function HomePage() {
    return (
        <div className='homePage'>
            <div className='textContainer'>
                <div className='wrapper'>
                    <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, eius commodi libero quam voluptas quaerat sunt explicabo consequuntur perferendis laborum deserunt? Quaerat quisquam neque quidem iusto distinctio dicta, aut repellat.</p>
                    <SearchBar></SearchBar>
                    <div className='boxes'>
                        <div className='box'>
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className='box'>
                            <h1>200</h1>
                            <h2>Award Gained</h2>
                        </div>
                        <div className='box'>
                            <h1>1200+</h1>
                            <h2>Properti Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='imgContainer'>
                <img src={img} alt=''></img>
            </div>
        </div>
    )

}

export default HomePage