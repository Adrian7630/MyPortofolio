import React from 'react';
import './css/home.css';
import avatar from './img/avatar.jpg';

function Home () 
{
    return (

        <section className = "home">

            <div className = "home-avatar">
                <img src = { avatar } alt = "avatar" />
            </div>
            
            <div className = "home-banner">

                <h1>Software Developer</h1>

                <hr/>

                <p className = "home-text">HTML / CSS | JavaScript | React </p>

                <div className="social-links">

                    <a href="https://www.linkedin.com/in/adrian-prisacaru-a9a45815b/" rel="noopener noreferrer" target="_blank">
                        <i className="fab fa-linkedin" aria-hidden="true" />
                    </a>

                    <a href="https://github.com/Adrian7630" rel="noopener noreferrer" target="_blank">
                        <i className="fab fa-github" aria-hidden="true" />
                    </a>

                </div>

            </div>

        </section>

    );
};


export default Home;