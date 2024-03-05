//import React, { useEffect, useRef } from 'react'
import axios from 'axios'

import React, { useEffect, useRef, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import ContactForm from '../../ContactUs/ContactForm'
import style from '../MedicalImagingSystem/MedicalImagingSystem.module.css'
import { ImageTextSol, ImageWithText } from '../../../components/commonJsComponent/ImageWithCenterText'
import dummyimage from '../../../assets/static/images/staticMachineImg.jpg'
import pmlsthumb from '../../../assets/static/images/f3.jpg'
import { ProductCard } from '../Products/prodCard'

function Pmls() {
  const amRef = useRef(null)
  const pmsRef = useRef(null)
  const resRef = useRef(null)
  const fesRef = useRef(null)
  const ipRef = useRef(null)
  const slRef = useRef(null)

  const hemoScroll = () => amRef.current.scrollIntoView()
  const pmsRefScroll = () => pmsRef.current.scrollIntoView()
  const resScroll = () => resRef.current.scrollIntoView()
  const fesScroll = () => fesRef.current.scrollIntoView()
  const ipScroll = () => ipRef.current.scrollIntoView()
  const slScroll = () => slRef.current.scrollIntoView()


  useEffect(() => {
    if (window.location.href.endsWith('#AM'))
      hemoScroll()

    if (window.location.href.endsWith('#PMS'))
      pmsRefScroll()

    if (window.location.href.endsWith('#RES'))
      resScroll()

    if (window.location.href.endsWith('#FES'))
      fesScroll()

    if (window.location.href.endsWith('#IP'))
      ipScroll()
    if (window.location.href.endsWith('#SL'))
      slScroll()


    console.log("check");
  }, [window.location.href])

  const disc = `We embrace innovations that enhance the safety and effectiveness of animal care. With a comprehensive product portfolio encompassing patient monitoring, anesthesia machines, infusion systems, and surgical lights, we offer adaptive solutions to meet the diverse needs of various animal care scenarios.`

  let mainPage = 'IVD'
  {/*let AnesthesiaMachines_prodList = [
    { id: 4801, src: dummyimage, name: 'm1' },
    { id: 4802, src: dummyimage, name: 'm2' },
    { id: 4803, src: dummyimage, name: 'm3' },
    { id: 4804, src: dummyimage, name: 'm4' },
    { id: 4805, src: dummyimage, name: 'm5' }]

  let pms_prodList = [
    { id: 4811, src: dummyimage, name: 'm1' },
    { id: 4812, src: dummyimage, name: 'm2' },
    { id: 4813, src: dummyimage, name: 'm3' },]

  let res_prodList = [
    { id: 4831, src: dummyimage, name: 'm1' },
    { id: 4832, src: dummyimage, name: 'm2' },
    { id: 4833, src: dummyimage, name: 'm3' },
    { id: 4834, src: dummyimage, name: 'm4' },
    { id: 4835, src: dummyimage, name: 'm5' }]

  let fes_prodList = [
    { id: 4840, src: dummyimage, name: 'm1' },
    { id: 4841, src: dummyimage, name: 'm2' },
    { id: 4843, src: dummyimage, name: 'm3' },
    { id: 4844, src: dummyimage, name: 'm4' },
    { id: 4848, src: dummyimage, name: 'm5' }]

  let ip_prodList = [
    { id: 4870, src: dummyimage, name: 'm1' },
    { id: 4871, src: dummyimage, name: 'm2' },
    { id: 4873, src: dummyimage, name: 'm3' },
    { id: 4874, src: dummyimage, name: 'm4' },
    { id: 4878, src: dummyimage, name: 'm5' }]

  let sl_prodList = [
    { id: 4881, src: dummyimage, name: 'm1' },
    { id: 4882, src: dummyimage, name: 'm2' },
    { id: 4883, src: dummyimage, name: 'm3' },
    { id: 4884, src: dummyimage, name: 'm4' },
  { id: 4888, src: dummyimage, name: 'm5' }]*/}
  const [AnesthesiaMachines_prodList, setanes_prodList] = useState([]);
  const [pms_prodList, setpms_prodList] = useState([]);
  const [res_prodList, setres_prodList] = useState([]);
  const[fes_prodList,setfes_prodList]= useState([]);
  const[ip_prodList,setip_prodList]= useState([]);
  const[sl_prodList,setsl_prodList]= useState([]);
  
  const fetchana = async () => {
      const result = await axios.get('http://localhost:8000/cart/?sub_category=anesthesia');

      console.log(result.data)
      setanes_prodList(result.data)
  }
  const fetchpms = async () => {
      const result1 = await axios.get('http://localhost:8000/cart/?sub_category=pms');

      console.log(result1.data)
      setpms_prodList(result1.data)
  }
  
  const fetchres = async () => {
      const result2 = await axios.get('http://localhost:8000/cart/?sub_category=res');

      console.log(result2.data)
      setres_prodList(result2.data)
  }

  const fetfes = async () => {
    const result2 = await axios.get('http://localhost:8000/cart/?sub_category=fes');

    console.log(result2.data)
    setfes_prodList(result2.data)
}
const fetfip = async () => {
  const result2 = await axios.get('http://localhost:8000/cart/?sub_category=infusion');

  console.log(result2.data)
  setip_prodList(result2.data)
}
const fetsl = async () => {
  const result2 = await axios.get('http://localhost:8000/cart/?sub_category=slight');

  console.log(result2.data)
  setsl_prodList(result2.data)
}
  useEffect(() => {
    fetchana();
}, [])
useEffect(() => {
  fetchpms();
}, [])
useEffect(() => {
  fetchres();
}, [])
useEffect(() => {
  fetfes();
}, [])
useEffect(() => {
  fetfip();
}, [])
useEffect(() => {
  fetsl();
}, [])



  return (
    <div className='marg-top-common'>

      <section className='ivd-s1'>
        <ImageTextSol src={pmlsthumb} altName={'pmls.jpg'} text={['Monitoring Patients and Providing Life Support', 'Ensuring Safety in Monitoring', disc]} key={'ivd'} />
      </section>


      <section className={'container ivd-s2 mt-5 mb-2'} ref={amRef}>
        <p className='h2 d-flex justify-content-center mb-5'>Devices for Anesthesia Administration</p>
        <div className="products">
          {AnesthesiaMachines_prodList &&
            AnesthesiaMachines_prodList.map((product) => (<ProductCard key={product.id} product={product} category={mainPage} />
            ))}
        </div>
      </section>

      <section className='container ivd-s3 ' ref={pmsRef}>
        <p className='h2 d-flex justify-content-center mb-5'>Systems for Monitoring Patients</p>
        <div className="products">
          {pms_prodList &&
            pms_prodList.map((product) => (<ProductCard key={product.id} product={product} category={mainPage} />
            ))}
        </div>
      </section>

      <section className='container ivd-s4 ' ref={resRef}>
        <p className='h2 d-flex justify-content-center mb-5'>Endoscopic System with Rigid Design</p>
        <div className="products">
          {res_prodList &&
            res_prodList.map((product) => (<ProductCard key={product.id} product={product} category={mainPage} />
            ))}
        </div>
      </section>

      <section className='container ivd-s4 ' ref={fesRef}>
        <p className='h2 d-flex justify-content-center mb-5'>Endoscopic System with Flexible Design</p>
        <div className="products">
          {fes_prodList &&
            fes_prodList.map((product) => (<ProductCard key={product.id} product={product} category={mainPage} />
            ))}
        </div>
      </section>


      <section className='container ivd-s5 ' ref={ipRef}>
        <p className='h2 d-flex justify-content-center mb-5'>Devices for Intravenous Infusion</p>
        <div className="products">
          {ip_prodList &&
            ip_prodList.map((product) => (<ProductCard key={product.id} product={product} category={mainPage} />
            ))}
        </div>
      </section>

      <section className='container ivd-s6 ' ref={slRef}>
        <p className='h2 d-flex justify-content-center mb-5'>Illumination Systems for Surgery</p>
        <div className="products">
          {sl_prodList &&
            sl_prodList.map((product) => (<ProductCard key={product.id} product={product} category={mainPage} />
            ))}
        </div>
      </section>

      <section className='contactus' >
        <ContactForm />
      </section>

    </div >
  )
}

export default Pmls