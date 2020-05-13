import React from 'react';
import './css/contact.css';
import avatar from './img/avatar.jpg';

function Contact () 
{
    return (

        <div className = "cover-box">   
        <div className = "contact-box">

            <div className = "name">

                <h1>Adrian Prisacaru</h1>

                <img src = { avatar } alt = "avatar" />

                <p>
                   I am a recent graduate with a 2:1 degree in Engineering and Computer Science,
                   that find programming a challange and interesting to learn and master .
                </p>

            </div>

            <div className = "number">

                <h1> Contact Me</h1>

                <hr/>

                <div className = "tags">

                    <p>
                        <i className="fa fa-phone-square" aria-hidden="true"/>
                        0748051195
                    </p>

                    <p>
                        <i className="fa fa-envelope" aria-hidden="true"/>
                        prisacaru.adrian25@gmail.com 
                    </p>

                    <p>
                        <i className="fa fa-skype" aria-hidden="true"/>
                        live:.cid.689ba5290b78cf22
                    </p>

                </div>

            </div>

        </div>
        </div> 
    );
};

export default Contact;