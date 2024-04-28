import Navbar from 'components/Navbar/Navbar'
import './layout.scss'

import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="layout">
      <div className='navBar'>
        <Navbar></Navbar>
      </div>
      <div className='content' >
        <Outlet/>
      </div>
    </div>
  )
}
