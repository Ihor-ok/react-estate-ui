import './Navbar.scss'
import img from '../../icons/logo.png'
import imgMenu from '../../icons/menu.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'


function Navbar() {

    const [open, setOpen] = useState(false)

    const user = true;

    return (
        <nav>
            <div className="left">
                <a href='/' className='logo'>
                    <img src={img} alt='' />
                    <span>Demesne</span>
                </a>
                <a href='/'>Home</a>
                <a href='/'>About</a>
                <a href='/'>Contact</a>
                <a href='/'>Agents</a>

            </div>
            <div className="right">
                {user ? (<div className='user'>
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>John Doe</span>
                    <Link to='/react-estate-ui/profile' className='profile'>
                        <div className="notification">3</div>
                        <span>Profile</span>
                    </Link>
                </div>) : <>
                    <a href='/'>Sign in</a>
                    <a href='/' className='register'>Sign up</a>
                </>}
                
                <div className='menuIcon'>
                    <img src={imgMenu} alt='' onClick={()=>setOpen((prev) => !prev)}></img>
                </div>
                <div className={open ? 'menu active' : 'menu'}>
                    <a href='/'>Home</a>
                    <a href='/'>About</a>
                    <a href='/'>Contact</a>
                    <a href='/'>Agents</a>
                    <a href='/'>Sign in</a>
                    <a href='/'>Sign up</a>
                </div>
             </div>
        </nav>
    )
};

export default Navbar;