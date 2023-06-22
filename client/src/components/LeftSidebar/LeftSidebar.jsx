import React from 'react'
import {NavLink} from 'react-router-dom'
import Globe from '../../assets/Globe.svg'
import './LeftSidebar.css'


const LeftSidebar = () => {
    return (
        <div class='left-sidebar'>
            <nav class='side-nav'>
                <NavLink to='/' className='side-nav-links' activeClassName='active' >
                    <p>Home</p>

                </NavLink>
                <div class='side-nav-div'>
                    <div><p class="side-nav-links">Public</p></div>
                    <NavLink to='/Questions' >
                        <img src={Globe} alt="Globe" class="globe-img" style={{paddingLeft:"10px"}}/>
                        <p class="Questions-p">Question</p>
                    </NavLink>
                    <NavLink to="/Tags" className="side-nav-links"  style={{paddingLeft:"40px"}}>
                        <p>Tags</p>
                    </NavLink>
                    <NavLink to="/Users" className="side-nav-links"  style={{paddingLeft:"40px"}}>
                        <p>Users</p>
                    </NavLink>
                </div>
            </nav>

        </div>
    )
}

export default LeftSidebar