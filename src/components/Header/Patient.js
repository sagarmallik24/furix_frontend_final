import React, { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, useLocation } from 'react-router-dom';
function Patient() {
  const [isOpen, setIsOpen] = useState(false);
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
  return (
    <div>
      <h onClick={() => setIsOpen(!isOpen)}>Patient Monitoring & Life Support <RiArrowDropDownLine /> </h>
      {isOpen && (
        <div>
             <ul className='ul-head'>
                                                <li> <Link className={`dD-fragment-link`} to={path_to_ProdPagePMLS + '#AM'} target='_top' >Anesthesia Machines</Link></li>
                                                <li> <Link className={`dD-fragment-link`} to={path_to_ProdPagePMLS + '#PMS'} target='_self' >Patient Monitoring Systems</Link></li>
                                                <li> <Link className={`dD-fragment-link`} to={path_to_ProdPagePMLS + '#RES'} target='_top' >Rigid Endoscopy System</Link></li>
                                                <li> <Link className={`dD-fragment-link`} to={path_to_ProdPagePMLS + '#FES'} target='_top' >Flexible Endoscopy System</Link></li>
                                                <li> <Link className={`dD-fragment-link`} to={path_to_ProdPagePMLS + '#IP'} target='_top' >Infusion Pumps</Link></li>
                                                <li> <Link className={`dD-fragment-link`} to={path_to_ProdPagePMLS + '#SL'} target='_top' >Surgical Lights</Link></li>
                                               </ul>  
        </div>
      )}
    </div>
  );
}

export default Patient;