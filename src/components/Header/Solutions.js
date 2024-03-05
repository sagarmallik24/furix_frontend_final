import React, { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, useLocation } from 'react-router-dom';
function Solutions() {
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

  function alterLangMenu() {
    document.getElementById("alterLangeMenu").classList.toggle("active")
    document.getElementById("data-overlay-language").classList.toggle("active")
}

  return (
    <div>
      <h onClick={() => setIsOpen(!isOpen)}>Solutions<RiArrowDropDownLine /> </h>
      {isOpen && (
        <div>
      <ul className='ul-head'>
                                                <li> <Link className={`dD-fragment-link`} to="/Companion_Animals" target='_top'> Companion Animals</Link></li>
                                                <li><Link className={`dD-fragment-link`} to="/Farm_Animals" target='_top'> Farm Animals</Link></li>
                                                <li> <Link className={`dD-fragment-link`} to="/Equine" target='_top'> Equine</Link></li>
                                                <li> <Link className={`dD-fragment-link`} to="/Exotic_Animals" target='_top'> Exotic Animals</Link></li>
                                            </ul>
          <p>Option B</p>
          <p>Option C</p>   
        </div>
      )}
    </div>
  );
}

export default Solutions;