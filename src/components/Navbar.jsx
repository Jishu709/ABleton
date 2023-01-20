import React, { useState } from 'react'
import logo from "../assets/images/Ableton.svg"

export default function Navbar() {

  const [navOpen, setNavOpen]=useState(false)
  return (
    <>
    <nav>
      <img className='nav-logo' src={logo}></img>

        <div className="dropdown">
      <button onClick={() => setNavOpen(!navOpen)} className='dropdown-btn'>Menu<span class="material-symbols-outlined">arrow_drop_down</span></button>

          <div className= {`dropdown-menu ${navOpen ? 'dropdown-menu-active' : 'dropdown-menu-close'}`}>
            {/* dropdownmenu */}
            
              <a href='https://www.ableton.com/en/live/'>Live</a>
              <a href='https://www.ableton.com/en/push/'>Push</a>
              <a href='https://www.ableton.com/en/note/'>Note</a>
              <a href='https://www.ableton.com/en/link/'>Link</a>
              <a href='https://www.ableton.com/en/shop/'>Shop</a>
              <a href='https://www.ableton.com/en/packs/'>Packs</a>
              <a href='https://www.ableton.com/en/help/'>Help</a>
               
              <a href=''>Try Live for free</a>
              <a href=''>Log in or register</a>
          </div>
        </div>
        
         
          <div className='nav-links'>  

            <div>
              <a href='https://www.ableton.com/en/live/'>Live</a>
              <a href='https://www.ableton.com/en/push/'>Push</a>
              <a href='https://www.ableton.com/en/note/'>Note</a>
              <a href='https://www.ableton.com/en/link/'>Link</a>
              <a href='https://www.ableton.com/en/shop/'>Shop</a>
              <a href='https://www.ableton.com/en/packs/'>Packs</a>
              <a href='https://www.ableton.com/en/help/'>Help</a>
              <button>More+</button>      
      
            </div>

            <div className='right-link'>
              <a href=''>Try Live for free</a>
              <a href=''>Log in or register</a>
            </div>

     

        </div>
    </nav>
    <hr></hr>
    </>
  )
}
