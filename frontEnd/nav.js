import {React, useState} from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './home.js'
import About from './about.js'
import Contact from './contact.js'
import Cart from './cart.js'
import Login from './login.js'
import './style/global.css'
import Book from './book.js'

const Nav = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const style = {
        fill: isHovered ? '#bc5f1d' : '#8B4513'
      };

    return(
            <BrowserRouter>
                <nav>
                    <ul>
                        <li id='ddd'><Link to="/"><svg viewBox="0 0 349.99999999999994 148.03913082026452" preserveAspectRatio="xMidYMid meet" class="css-8aabad" id="hgebbafg"><defs id="SvgjsDefs1011"></defs><g id="SvgjsG1012" featurekey="rDwwlG-0" transform="matrix(1.1990958268771943,0,0,1.1990958268771943,116.19628505395973,-17.890508684944596)" fill="#ffff"><g xmlns="http://www.w3.org/2000/svg"><path id='ddd' d="M49.432,46.697c-23.707,0-42.924,7.333-42.924,16.379c0,4.664,5.109,8.873,13.31,11.855   c5.69,6.523,16.817,10.955,29.615,10.955c12.797,0,23.925-4.432,29.614-10.955c8.2-2.982,13.31-7.191,13.31-11.855   C92.355,54.03,73.139,46.697,49.432,46.697z M49.432,70.226c-21.599,0-39.108-4.762-39.108-10.637s17.509-12.744,39.108-12.744   s39.107,6.869,39.107,12.744S71.03,70.226,49.432,70.226z"></path><path d="M84.5,58.188h0.002l-0.006-0.006c-0.114-0.145-0.245-0.287-0.394-0.429L67.215,39.349L54.676,25.095   c1.078-0.55,1.817-1.671,1.817-2.965v-3.253c0-1.418-0.888-2.629-2.138-3.108c-1.169-0.518-2.939-0.849-4.924-0.849   c-1.984,0-3.755,0.331-4.923,0.848c-1.25,0.479-2.139,1.689-2.139,3.108v3.253c0,1.294,0.74,2.415,1.819,2.965L31.648,39.349   L14.761,57.753c-0.148,0.142-0.279,0.284-0.393,0.429l-0.005,0.006h0.001c-0.352,0.447-0.536,0.907-0.536,1.376   c0,4.38,15.94,7.931,35.604,7.931c19.664,0,35.604-3.551,35.604-7.931C85.035,59.095,84.851,58.635,84.5,58.188z"></path></g></g></svg></Link></li>
                        <li className='s'><Link to="/about">ABOUT</Link></li>
                        <li className='s'><Link to="/contact">CONTACT US</Link></li>
                        <li className='s'><Link to='/booking'>BOOK A TABLE</Link></li>
                        <li><Link to="/cart">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="#fff" id="a"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.16 14h9.68c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0 0 21.25 5H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 16.37 5.48 18 7 18h12v-2H7.42a.5.5 0 0 1-.45-.28l.19-.34z"/></svg>
                        </Link></li>
                        <li id='login'>
                            <Link to="/login"><svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><circle onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={style} cx="50" cy="50" r="40" fill="#8B4513"/><circle className='p' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} cx="50" cy="35" r="12" fill="#fff"/><rect onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='p' x="30" y="48" width="40" height="25" rx="30" fill="#fff"/></svg></Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/about' element={<About/>}></Route>
                    <Route path='/contact' element={<Contact/>}></Route>
                    <Route path='/booking' element={<Book />}></Route>
                    <Route path='/cart' element={<Cart/>}></Route>
                    <Route path='/login' element={<Login/>}></Route>
                </Routes>
            </BrowserRouter>
    )
}

export default Nav