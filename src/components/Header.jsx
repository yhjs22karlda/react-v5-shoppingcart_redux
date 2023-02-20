import Cart from './Cart'
import {Link, Outlet} from 'react-router-dom'
import data from './../assets/data.js'
import './Header.css'

export default function Header() {

    return (
        <>
        <div className="header">
            <Link to="/"><img src="sherlock.png" alt="bild" /></Link>
            <p className='header__para'><Link to="/">Home</Link></p>
            <p className='header__para'><Link to="/about">About</Link></p>
            <p className='header__para'><Link to="/products">Products</Link></p>
            <Cart books={data} />
        </div>
        <Outlet context={data}/>
        </>
    )
}
