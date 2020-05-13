import React from 'react';
import './css/aboutme.css';
import avatar from './img/avatar.jpg';

function Aboutme ()
{
    return (

        <div className = "CV">

            <div className = "profile">

                <img src = { avatar } alt = "avatar" />

                <div className = "profile-text">

                    <h1>Adrian Prisacaru</h1>

                    <h3>Software Developer</h3>

                    <div className = "avatar-line" />

                    <p>
                        I am a recent graduate with a 2:1 degree in Engineering and Computer Science,
                        started working after graduation in 2018 , i studied electronics while learning programming languages such as C/C++ and Python .
                        After one year of working as a Software Developer i started looking into React and took some online courses and stated a new journey .   
                    </p>

                </div>

            </div>

            <div className = "profile-info">

                <h3>Education</h3>

                <div className = "box-info">

                    <div className = "year"> 2014-2018 </div>

                    <div className = "text">

                        <h4>Faculty of Telecommunications</h4>

                        <div className = "line" />

                        <p>
                            Used single-board computers like Raspberry Pi and Arduinolearning the programming language C , C++ , Python .
                            Took beginning classes for web design , learning basic HTML , CSS , Javascript language .
                        </p>

                    </div>

                </div>

                <div className = "box-info">

                    <div className = "year"> 2010-2014 </div>

                    <div className = "text">

                        <h4>Highschool Nicolae Iorga</h4>

                        <div className = "line" />

                        <p>
                           Took classes for Network Software ,
                           i learned the basic concept of Cisco Property , and Protocols . 
                        </p>

                    </div>

                </div>

                <hr/>

                <h3>Experience</h3>

                <div className = "box-info">

                    <div className = "year"> 2019-Present </div>

                    <div className = "text">

                        <h4>EXPLEO Group</h4>

                        <div className = "line" />

                        <p>
                            Analyze customer requirements , 
                            prepare specifications and do implementation in the area of control and data acquisition systems based on 
                            AUTOSAR protocol and Matlab projects.
                        </p>

                    </div>

                </div>

            </div>

        </div>

    );
};

export default Aboutme;