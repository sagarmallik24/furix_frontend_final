import React, { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, useLocation } from 'react-router-dom';
function Diagnostics() {
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
      <h onClick={() => setIsOpen(!isOpen)}>In-Vitro Diagnostics <RiArrowDropDownLine /> </h>
      {isOpen && (
        <div>
            <ul className='ul-head'>
                                                <li> <Link className={`dD-fragment-link`} to={path_to_ProdPageIVD + '#Hematology'} target='_blank'>Hematology </Link></li>
                                                <li> <Link className={`dD-fragment-link`} to={path_to_ProdPageIVD + '#Chemistry'} target='_blank'>Chemistry </Link></li>
                                                <li> <Link className={`dD-fragment-link`} to={path_to_ProdPageIVD + '#Urinalysis'} target='_blank'>Urinalysis </Link></li>
                                                <li> <Link className={`dD-fragment-link`} to={path_to_ProdPageIVD + '#Molecular-Diagnosis'} target='_blank'>Molecular Diagnosis </Link></li>
                                              </ul>
        </div>
      )}
    </div>
  );
}

export default Diagnostics  ;