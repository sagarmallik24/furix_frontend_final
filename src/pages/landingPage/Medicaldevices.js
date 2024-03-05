import React, { useEffect, useRef, useState } from 'react'
import './Medicaldevices.css'
import carousal from '../../assets/static/images/carousal/carousal1.jpg'
import { Link } from 'react-router-dom'


import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import axios from 'axios';
import utils from '../../assets/utils';
import s1 from '../../assets/static/images/mis1.jpg'
import { data } from 'jquery';


function Medicaldevices() {

    let widthOutput;
    const [values, setValues] = useState([]);

    widthOutput = window.innerWidth;
    useEffect(() => {
        if (values.length === 0)
            getData();

        if (widthOutput > 1080)
            setDisplayMD(3);
        if (widthOutput > 769 && widthOutput < 1080)
            setDisplayMD(2);
        if (widthOutput < 770)
            setDisplayMD(1);
    }, [widthOutput])


    const hrefs = ['#', '/product/MIS', '/product/IVD', '/product/PMLS']


    const getData = async () => {
        const data = await axios.get(`http://localhost:8000/cart/?sub_category=chemistry`).then((data) => {
            let tempdata = data.data;
            let dataValues = []
            tempdata.map((data) => {

                dataValues.push({
                    src: data.product_img,
                    name: data.product_name,
                    href: hrefs[data.id],
                    headLine: data.full_desc,
                    description: data.short_desc
                })
                setValues([...values, ...dataValues])
            })
        });


    }

    const [displayMD, setDisplayMD] = useState(1);

  
    return (

        <div className="md-container container " id="width">
 {/*<Swiper
                modules={[Navigation, Pagination, A11y,]}
                slidesPerView={displayMD}
                spaceBetween={50}
                pagination={{ clickable: true }}
            >
                           {values.map((value, index) => {
                           return <SwiperSlide key={index} >*/}
                           <div className='container'>
                            <div className='row'>
                                <div className='col'>
                                                    <div className='card p-3 mb-5 '>

                           
                           
                        <a href="product/MIS">
    								<img src={require("../../assets/static/images/f1.jpg")} className='md-demoContaint-img' alt="entry mis" />
    							</a>
    						
                                <p className='mt-4 a-red'>User-Friendly Design of Medical Imaging System</p>
                                <h5 className='mt-2 mb-2 a-red'>Visual Confidence</h5>
    							<p className='mb-3' >	Our ultrasound imaging solutions, encompassing both cart-based and portable systems, are meticulously crafted to elevate veterinarians' diagnostic confidence through exceptional image quality, specialized veterinary parameters, and a user-friendly workflow. With a profound understanding of our customers, we deliver substantial advantages to veterinarians by providing visualized animal care.
    </p>
    <Link to="product/MIS">
                                <p className='text-end a-red'>more</p>
                            </Link>
    						
    								{/* <Link to={value.href}>
                                <p className='text-end a-red'>more</p>
                            </Link>
  
                            <Link to={value.href}>
                                <img src={value.src} alt="Service icon" className='md-demoContaint-img' />
                                <p className='mt-4 a-red'>{value.name}</p>
                                <h5 className='mt-2 mb-2 a-red'>{value.headLine}</h5>
                            </Link>
                            <p className='mb-3' >{value.description.substring(0, 400)}...</p>

                            <Link to={value.href}>
                                <p className='text-end a-red'>more</p>
                            </Link>*/}
                        </div>
                        </div>
                        	
    								{/* <Link to={value.href}>
                                <p className='text-end a-red'>more</p>
                            </Link>
  
                            <Link to={value.href}>
                                <img src={value.src} alt="Service icon" className='md-demoContaint-img' />
                                <p className='mt-4 a-red'>{value.name}</p>
                                <h5 className='mt-2 mb-2 a-red'>{value.headLine}</h5>
                            </Link>
                            <p className='mb-3' >{value.description.substring(0, 400)}...</p>

                            <Link to={value.href}>
                                <p className='text-end a-red'>more</p>
                            </Link>*/}
                        <div className='col'>
                        <div className='card p-3 mb-5 '>

                           
                           
               <a href="product/IVD">
               <img src={require("../../assets/static/images/f2.jpg")} className='md-demoContaint-img' alt="entry mis" />
              </a>

              <p className='mt-4 a-red'>Complete In-Vitro Diagnostic Solutions</p>
              <h5 className='mt-2 mb-2 a-red'>Precise Outcome Accuracy</h5>
              <p className='mb-3' >
              We offer a comprehensive range of In-Vitro Diagnostic solutions for animals, including 3-diff hematology, 5-diff hematology, biochemistry, and PCR products. By providing precise and efficient tests, we cater to the growing needs of veterinary laboratories of varying sizes.
                                    </p>
    								<br/><br/>

                                    <Link to="product/IVD">
                                <p className='text-end a-red'>more</p>
                            </Link>
    
</div>
</div>
<div className='col'>
    <div className='card p-3 mb-5 '>

                           
                           
               <a href="product/PMLS">
               <img src={require("../../assets/static/images/f3.jpg")} className='md-demoContaint-img' alt="entry mis" />
              </a>

              <p className='mt-4 a-red'>Providing Patient Monitoring and Life Support</p>
              <h5 className='mt-2 mb-2 a-red'>Ensuring Security in Monitoring</h5>
              <p className='mb-3' >We are committed to embracing innovations that enhance the safety and effectiveness of animal care.

Our extensive product portfolio includes patient monitoring, anesthesia machines, infusion systems, and surgical lights, offering adaptive solutions to address the diverse needs of various animal care scenarios.		<br/><br/>
</p>
                                    <Link to="product/PMLS">
                                <p className='text-end a-red'>more</p>
                            </Link>
                            </div>
  
</div>
</div>
</div>
                 {/* </SwiperSlide>


                  })} 
                </Swiper>*/}
        </div>

    )
}

export default Medicaldevices