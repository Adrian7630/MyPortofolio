import React from 'react';
import { Link } from 'react-router-dom';

function Menu ()
{

    const navLinks = [
        {
          text: 'Home',
          path: '/',
          icon: 'fas fa-home'
        },
        {
          text: 'About',
          path: '/aboutme',
          icon: 'fas fa-address-card'
        },
        {
          text: 'Projects',
          path: '/projects',
          icon: 'fas fa-laptop-code'
        },
        {
          text: 'Contact',
          path: '/contact',
          icon: 'fas fa-envelope'
        }
      ]

    return (

        <header>

            <nav className = "menu">

                <div className = "logo-mobile">
                    <h3>A</h3>
                </div>

                <div className = "logo">
                    <h3>Adrian</h3>
                </div>

                <ul className = "menu-links">
                    {navLinks.map( link  => 

                        <Link to = { link.path } style = {{ color: 'black', textDecoration: 'none'}}> 

                            <div className = "mobile-icon" ><i className = { link.icon } /></div>

                            <li>
                                <i className = { link.icon }/> 
                                { link.text } 
                            </li>

                        </Link>

                    )}
                </ul>

            </nav>

        </header>

    );

};

export default Menu ;