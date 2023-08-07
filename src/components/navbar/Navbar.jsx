import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.png';

// const Menu = () => {
//   <>
//   <p><a href="#home">Home</a></p>
//   <p><a href="#whatapp1">Whatapp</a></p>
//   <p><a href="#possibility">About</a></p>
//   <p><a href="#blog">Library</a></p>
//   <p><a href="#features">Learn</a></p>
//  </>
// }
 


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='whatapp__navbar'>
      <div className='whatapp__navbar-links'>
        <div className='whatapp__navbar-links_logo'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='whatapp__navbar-links_container'>
        <p><a href="#home">Home</a></p>
        <p><a href="#whatapp1">Whatapp</a></p>
        <p><a href="#possibility">About</a></p>
        <p><a href="#blog">Library</a></p>
       <p><a href="#features">Learn</a></p>        </div>
      </div>
      <div className='whatapp__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>

      <div className='whatapp__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='whatapp__navbar-menu_container scale-up-center'>
            <div className='whatapp__navbar-menu_container-links'>
              <p><a href="#home">Home</a></p>
              <p><a href="#whatapp1">Whatapp</a></p>
              <p><a href="#possibility">About</a></p>
              <p><a href="#blog">Library</a></p>
              <p><a href="#features">Learn</a></p>            
            </div>
            <div whatapp__navbar-menu_container-links-sign>
            <p>Sign in</p>
            <button type='button'>Sign up</button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Navbar;

