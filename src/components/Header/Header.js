import React, { Fragment } from 'react'
import './Header.css'
import Modal from 'react-modal';
import { Link, useLocation } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import MedicalDropdown from './MedicalDropdown';
import Mydrop from './Mydrop';
import Diagnostics from './Diagnostics';
import Patient from './Patient';
import Solutions from './Solutions';
Modal.setAppElement(document.getElementById('root'));
function Header() {
    let location = useLocation();
    let path_to_AboutPage = "/about-us"
    let path_to_ProdPage = "/product"
    let path_to_ProdPageMis = "/product/MIS"
    let path_to_ProdPageIVD = "/product/IVD"
    let path_to_ProdPagePMLS = "/product/PMLS"
    let path_to_ContactPage = "/contact-us"
    let path_to_ServicePage = "/service"
    let path_to_MedServicePage = "/news"
    let path_to_donate = "/donate"

    if (location.pathname === '/404') {
        return <>
            <div className='isFound' id='is-Found'></div>
        </>;
    }

    function alterMobileMenu() {
        document.getElementById("alterMobileMenu").classList.toggle("active")
        document.getElementById("data-overlay-language").classList.toggle("active")
    }

    function alterLangMenu() {
        document.getElementById("alterLangeMenu").classList.toggle("active")
        document.getElementById("data-overlay-language").classList.toggle("active")
    }

    function alterALLMenu() {
        document.getElementById("alterMobileMenu").classList.remove("active")
        document.getElementById("alterLangeMenu").classList.remove("active")
        document.getElementById("data-overlay-language").classList.remove("active")
    }
    
    return (
        <>
        
        <div className='isFound' id='is-Found'>
            <Fragment>
                <nav className="inav_custom_navbar" id="inav_custom_navbar">
                    <header>

                        <div className='header-start'>
                            <a href='/' >
                                <div className='header-font ' id='logo' />
                            </a>
                        </div>

                        <div className='burger' id='burger' onClick={() => alterMobileMenu()}>
                            <div className='line'></div>
                            <div className='line'></div>
                            <div className='line'></div>
                        </div>

                        <div className='header-center'>
                            <div className='link-tag header-font'>
                                <Link to={path_to_AboutPage} className={`inav_links ${location.pathname === '/about-us' ? 'active' : ''}`}>About us</Link>
                                

                            </div>
                            
                            <div className='link-tag header-font dropdown'>
                                <Link to={path_to_ProdPage} className={`inav_links ${location.pathname.includes('/product') ? 'active' : ''}`} target='_top'>Products & Solutions  </Link>
                                
                                <div className='dropdown-menu'>
                                    <div className='dropDown-fragment'>
                                        <Fragment>
                                            <div>
                                                <li className='ul-header'><Link className={"dD-fragment-link"} to={path_to_ProdPageMis} target='_top' style={{color:'red',fontSize:'20px'}} >Medical Imaging System</Link></li>
                                                
                                                <ul className='ul-head'>
                                               <li> <Link className={`dD-fragment-link`} to={path_to_ProdPageMis + '#CBS'} target='_blank' >Cart-Based System</Link></li>
                                               <li > <Link className={"dD-fragment-link"} to={path_to_ProdPageMis + '#PS'} target='_blank' >Portable System</Link></li>
                                               <li> <Link className={"dD-fragment-link"} to={path_to_ProdPageMis + '#DRS'} target='_blank' >Digital Radiography System</Link></li>
                                                </ul>
                                            </div>
                                        </Fragment>
                                        <Fragment>
                                            <div>
                                                <li className='ul-header'><Link className={`dD-fragment-link`} to={path_to_ProdPageIVD} target='_top' style={{color:'red',fontSize:'20px'}} >In-Vitro Diagnostics</Link></li>
                                                <ul className='ul-head'>
                                                <li> <Link className={`dD-fragment-link`} to={path_to_ProdPageIVD + '#Hematology'} target='_blank'>Hematology </Link></li>
                                                <li> <Link className={`dD-fragment-link`} to={path_to_ProdPageIVD + '#Chemistry'} target='_blank'>Chemistry </Link></li>
                                                <li> <Link className={`dD-fragment-link`} to={path_to_ProdPageIVD + '#Urinalysis'} target='_blank'>Urinalysis </Link></li>
                                                <li> <Link className={`dD-fragment-link`} to={path_to_ProdPageIVD + '#Molecular-Diagnosis'} target='_blank'>Molecular Diagnosis </Link></li>
                                              </ul>
                                            </div>
                                        </Fragment>
                                        <Fragment>
                                            <div>
                                                <li className='ul-header'><Link className={`dD-fragment-link`} to={path_to_ProdPagePMLS} target='_top' style={{color:'red',fontSize:'20px'}}>Patient Monitoring & Life Support</Link></li>
                                                <ul className='ul-head'>
                                                <li> <Link className={`dD-fragment-link`} to={path_to_ProdPagePMLS + '#AM'} target='_top' >Anesthesia Machines</Link></li>
                                                <li> <Link className={`dD-fragment-link`} to={path_to_ProdPagePMLS + '#PMS'} target='_self' >Patient Monitoring Systems</Link></li>
                                                <li> <Link className={`dD-fragment-link`} to={path_to_ProdPagePMLS + '#RES'} target='_top' >Rigid Endoscopy System</Link></li>
                                                <li> <Link className={`dD-fragment-link`} to={path_to_ProdPagePMLS + '#FES'} target='_top' >Flexible Endoscopy System</Link></li>
                                                <li> <Link className={`dD-fragment-link`} to={path_to_ProdPagePMLS + '#IP'} target='_top' >Infusion Pumps</Link></li>
                                                <li> <Link className={`dD-fragment-link`} to={path_to_ProdPagePMLS + '#SL'} target='_top' >Surgical Lights</Link></li>
                                               </ul>
                                            </div>
                                        </Fragment>
                                        <Fragment>
                                            <div>
                                                <li className='ul-header'><Link className={`dD-fragment-link`} to="/product" target='_top' style={{color:'red',fontSize:'20px'}} >Solutions</Link></li>
                                                <ul className='ul-head'>
                                                <li> <Link className={`dD-fragment-link`} to="/Companion_Animals" target='_top'> Companion Animals</Link></li>
                                                <li><Link className={`dD-fragment-link`} to="/Farm_Animals" target='_top'> Farm Animals</Link></li>
                                                <li> <Link className={`dD-fragment-link`} to="/Equine" target='_top'> Equine</Link></li>
                                                <li> <Link className={`dD-fragment-link`} to="/Exotic_Animals" target='_top'> Exotic Animals</Link></li>
                                            </ul>
                                            </div>
                                        </Fragment>
                                    </div>
                                </div>
                            
                            </div>

                            <div className='link-tag header-font dropdown'>
                            
                                <Link to={path_to_MedServicePage} className={`inav_links ${location.pathname.includes('/news') ? 'active' : ''}`} target='_top'>Medical Center</Link>
                                <div className='dropdown-menu-small'>
                                <ul className='ul-head'>
                                <li> <Link className={`dD-fragment-link`} to={path_to_MedServicePage + '#events'} target='_top' >Events</Link></li>
                                {/* <li> <Link className={`dD-fragment-link`} to={path_to_MedServicePage + '#news'} target='_top' >News</Link></li> */}
                                {/*<li> <Link className={`dD-fragment-link`} to={path_to_MedServicePage + '#video-center'} target='_top' >Video Center</Link></li>
                                  */} 
                                </ul>
                                </div>
                                </div>
                             {/*   <div>
                    <li className='ul-header'><Link className={`dD-fragment-link`} to="/add" target='_top' style={{color:'red',fontSize:'20px'}} >
                        ADD</Link></li>
                                                
                                </div>*/}

                                           
                                            <div>

                            </div>

                            <div className='link-tag header-font'>
                                <Link to={path_to_ServicePage} className={`inav_links ${location.pathname === '/service' ? 'active' : ''}`}>Service</Link>
                            </div>

                            <div className='link-tag header-font'>
                                <Link to={path_to_ContactPage} className={`inav_links ${location.pathname === '/contact-us' ? 'active' : ''}`}>Contact Us</Link>
                            </div>
                            <div className='link-tag header-font'>
                                <Link to={path_to_donate} className={`inav_links ${location.pathname === '/donate' ? 'active' : ''}`}>Donation</Link>
                            </div>

                        </div>

                        <div className='header-end'>
                            <div className='link-tag header-font ' onClick={() => alterLangMenu()}>Language</div>
                        </div>

                    </header>
                </nav>

                {
                    <Fragment>
                        <div className="sidebar" id="alterMobileMenu" onClick={() => alterMobileMenu()}>
                            
                           
                   
                            <div className='header-modal'>
                                <div className='modal-options' onClick={() => alterMobileMenu()}> <Link to={path_to_AboutPage} className={`dD-fragment-link`} onClick={() => alterMobileMenu()} >About us</Link></div>

                                <div className='modal-options' onClick={() => alterMobileMenu()}> <Link to={path_to_ProdPage} className={`dD-fragment-link`} onClick={() => alterMobileMenu()}>Products & Solutions</Link>
                               
                                <div>
                                <MedicalDropdown/>
                               <Diagnostics/>
                               <Patient/>
                               <Solutions/>
                       
                                </div>
                       
                                </div>
                              
                                <div className='modal-options' onClick={() => alterMobileMenu()}> <Link to={path_to_MedServicePage} className={`dD-fragment-link`} onClick={() => alterMobileMenu()}>Medical Center</Link>
                                <div>
                                <ul className='ul-head'>
                                <li> <Link className={`dD-fragment-link`} to={path_to_MedServicePage + '#events'} target='_top' >Events</Link></li>
                                <li> <Link className={`dD-fragment-link`} to={path_to_MedServicePage + '#news'} target='_top' >News</Link></li>
                                {/*<li> <Link className={`dD-fragment-link`} to={path_to_MedServicePage + '#video-center'} target='_top' >Video Center</Link></li>
                                  */} 
                                </ul>
                                </div>
                                </div>

                                <div className='modal-options' onClick={() => alterMobileMenu()}> <Link to={path_to_ServicePage} className={`dD-fragment-link`} onClick={() => alterMobileMenu()}>Service</Link></div>
                                <div className='modal-options' onClick={() => alterMobileMenu()}> <Link to={path_to_ContactPage} className={`dD-fragment-link`} onClick={() => alterMobileMenu()}>Contact Us</Link></div>
                                <br />
                            </div>
                        </div>
                    </Fragment>

                }

                {
                    <Fragment>
                        <div className="sidebar-lang" id="alterLangeMenu" onClick={() => alterLangMenu()}>

                            <div className='header-modal'>
                                <br />
                                <div className='modal-options' onClick={() => alterLangMenu()}><Link to='#' onClick={() => alterLangMenu()}>English (Global)</Link></div>
                                <div className='modal-options' onClick={() => alterLangMenu()}><Link to='#' onClick={() => alterLangMenu()}>中文</Link></div>
                                <div className='modal-options' onClick={() => alterLangMenu()}><Link to="#" onClick={() => alterLangMenu()}>English (North America)</Link></div>
                                <br />

                            </div>
                        </div>
                        {/* </Modal> */}


                    </Fragment>
                }

            </Fragment >
            <div className="overlay" id='data-overlay-language' onClick={() => alterALLMenu()}></div>
        </div>
        </>
    )
}

export default Header