import React, { useEffect, useRef, useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import ContactForm from '../../ContactUs/ContactForm';
import style from '../MedicalImagingSystem/MedicalImagingSystem.module.css'
import axios from 'axios';
import utils from '../../../assets/utils';
import { useLocation } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
//import { useParams, useHistory } from 'react-router';

import './Product.css'
const ProdPage = () => {

  //const { id } = useParams();
  //const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    });

    //data(id)
  }, [])


  // let [id, setId] = useState(null);
  let contactRef = useRef(null)
  

  const contactScroll = () => contactRef.current.scrollIntoView()

  

    const [student, setSetudent] = useState([])
    
    const {id} = useParams();
    const history = useNavigate();
    
    useEffect(() => {
        getSingleStudent();
    },[])
    
    
    const getSingleStudent = async () => {
      const  { data } = await axios.get(`http://127.0.0.1:8000/get/product/${id}/`)
      console.log(data);
      setSetudent(data);
      
    
    }

  

  return (
    <div className='marg-top-common'>
      <section className='container pp-s1 mt-2 mb-5 '>
        <Row>
          <Col md={6} className={style.ppCol}>

            {/* <p className='h6 fw-lighter'>head line</p> */}
            <p className='h3 fw-bolder'>{student.product_name}</p>
            <p className='h6 text-muted'>{student.full_desc}</p>
            <p className='h3 '>{student.short_desc}</p>
            <br />
            <p className='text-center ContactBtn ' onClick={() => contactScroll()} >
              Contach Us
            </p>
          </Col>
          <Col md={6} >
            <img src={student.product_img}  alt="..."width={'100%'} height={'auto'} className={style.ppImg} />
          </Col>
        </Row>

      </section>

     




      <section className='pp-s'>

      </section>

      <section ref={contactRef}>
        <div style={{ backgroundColor: '#ececec' }}>
          <ContactForm />
        </div >
      </section>
    </div>
  )
}

export default ProdPage