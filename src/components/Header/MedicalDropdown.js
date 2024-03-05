import React, { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, useLocation } from 'react-router-dom';
function MedicalDropdown() {
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
      <h onClick={() => setIsOpen(!isOpen)}>Medical Imaging System <RiArrowDropDownLine /> </h>
      {isOpen && (
        <div>
            <ul className='ul-head'>
                                               <li> <Link className={`dD-fragment-link`} to={path_to_ProdPageMis + '#CBS'} target='_blank' >Cart-Based System</Link></li>
                                               <li > <Link className={"dD-fragment-link"} to={path_to_ProdPageMis + '#PS'} target='_blank' >Portable System</Link></li>
                                               <li> <Link className={"dD-fragment-link"} to={path_to_ProdPageMis + '#DRS'} target='_blank' >Digital Radiography System</Link></li>
                                                </ul>
        </div>
      )}
    </div>
  );
}

export default MedicalDropdown  ;