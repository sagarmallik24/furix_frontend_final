import React from 'react'
import logo from '../../assets/static/images/furixlogo.png';
import { Container } from 'react-bootstrap'

import style from './Footer.module.css'
import { FaEnvelope, FaFacebook, FaLinkedin, FaPhone, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom';

function Footer() {
    let location = useLocation();

    if (location.pathname === '/404') {
        return null;
    }

    return (
        <footer className={style.footer_container} >
            <Container>
                <div className={style.headLine} >
                    <br />
                    <img src={logo} className={style.footerlogoImg} alt="Hollywood Sign on The Hill" />
                    <Link to="/about-us"><p className='float-end'>About</p>
                    </Link>
                    <Link to="/termsAndCondition"><p className='float-end px-3'>Terms and Condition</p>
                    </Link>

                    <div className='headLine-info mt-4'>
                    Addresses 
                        <div className='address '>Location 1 Head Quarters :- <p > 6/F MEGA CUBE, WANG KWONG ROAD, KOWLOON, HONG KONG <br></br>
                        <Link to="tel:+8613538187995">
                            <FaPhone className='mb-1' /> &nbsp; +852 95790472
                        </Link>
                        </p>
                        
                        </div>
                        <div className='address '>Location 2 Address :- <p > Furix Assembly line
5, Manjing hua xueyeli, Nanlian Street, Longgang District Shenzhen City, Guangdong Province, PRC. <br></br>
                        <Link to="tel:+8613538187995">
                            <FaPhone className='mb-1' /> &nbsp; +86 13538187995
                        </Link></p>
                        </div>
                        <div className='address '>Location 3 Address :- <p >Furix 
Pharmaceutical MFG Unit
39/1 kalaria, Dhar Rd, Indore, M.P. 
India 452001<br></br>
                        <Link to="tel:+8613538187995">
                            <FaPhone className='mb-1' /> &nbsp; +91 9981124206
                        </Link></p>
                        </div>
                        {/* <Link to="tel:+8613538187995">
                            <FaPhone className='mb-1' /> &nbsp; +86 13538187995
                        </Link> */}
                        <br />
                        <Link to='mailto:sales@myfurix.com'>
                            <FaEnvelope /> &nbsp; sales@myfurix.com
                        </Link>
                    </div>
                    <br />
                    <br />
                    <ul className={`${style.social_media} mt-3 `}>
                        <li className={`${style.social_media_icon} `}> <FaTwitter /></li>
                        <li className={`${style.social_media_icon} `}> <FaFacebook /></li>
                        <li className={`${style.social_media_icon} `}><FaYoutube /> </li>
                        <li className={`${style.social_media_icon} `}><FaLinkedin /> </li>
                    </ul>

                    <div className='d-flex justify-content-center mt-5 '>&copy; 2024 All Rights Reserved by Furix.</div>
                    <br />

                </div>
            </Container>
        </footer>
    )
}

export default Footer
