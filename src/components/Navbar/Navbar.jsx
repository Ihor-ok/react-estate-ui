import './Navbar.scss'
import img from '../../icons/logo.png'
import imgMenu from '../../icons/menu.png'
import { useState } from 'react'


function Navbar() {

    const [open, setOpen] = useState(false)
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
                <a href='/'>Sign in</a>
                <a href='/' className='register'>Sign up</a>
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