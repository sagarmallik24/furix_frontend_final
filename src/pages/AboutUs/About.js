import React from 'react';
import Varities from '../landingPage/Varities';
import Medicaldevices from '../landingPage/Medicaldevices';
import './About.css'
import video from '../../assets/static/images/carousal/background_video_hero.mp4'
import ContactForm from '../ContactUs/ContactForm';
const About = () => {


  const points = [ 

  ]
  return (
    <div className='marg-top-common'>
      <br />
      <div className='container mt-3'>

        <p className='h3'>About Us</p>

        <div className='a-p-index'>Furix is committed to delivering cutting-edge medical devices and holistic solutions for animals, spanning companion animals, farm animals, equine, and exotic species.

Situated in Hong Kong, our team comprises around 120 members, including 30 field sales representatives and 20 professionals in telesales and customer support. With 12 strategically located state-of-the-art distribution facilities and 10 inside sales centers across the nation, we consistently achieve a 98 percent or higher order-fill ratio, fulfilling our mission to deliver an unparalleled customer experience.
          <br />
          <br />

          <div className="background_video">
            <video src={video} loop={true} muted autoPlay={true}>
            </video>
            {/* <div className='centered-video h2'>
              <p className=''>
                Animal Care We Do
              </p>
            </div> */}
          </div>


          Partnering with numerous leading animal health manufacturers globally, we are positioned to offer a wide selection of veterinary products and strategic business solutions to veterinary professionals worldwide, encompassing

          <br />
          <br />
          
          <div style={{ backgroundColor: '#eeeccc' }}>
            <div className='container mt-3 text-center '>
              <p className='h2 text-black'>Core Values</p>
              <p className='a-p-index mt-2'>
              Aligning with our clientele
                <br />
                Valuing and enhancing our personnel
                <br />
                Ensuring precision and practicality
                <br />
                Continuously move forward
              </p>
            </div>
          </div>

          <ul>
            {points.map((data, index) => {
              return <li key={index}>{data}</li>
            })}
          </ul>

        </div>

      </div>


      <div style={{ backgroundColor: '#ececec' }}>
        <div className='container'>
          <p className='d-flex justify-content-center p-3 mb-3 h2 '>Solutions</p>
          <Varities />
        </div>
        <br />
      </div>

      <div className='container mt-5'>
        <p className='text-center h2 mb-3'>R&D</p>
        <p className='a-p-index'>
        We consistently invest in research and development to ensure that our products and solutions are designed to tackle the actual challenges faced by animals and veterinarians in diverse clinical scenarios. Through customer insights and technological innovations, we enhance workflow efficiency and provide a better customer experience for veterinarians in their daily clinical practices.
        </p>
      </div>

      <div >
        <div className='text-center mt-5'>
          <h3 className='mt-4 mb-4'>Learn More</h3>
        </div>
        <Medicaldevices />
      </div>

      <div style={{ backgroundColor: '#ececec' }}>
        <ContactForm />
      </div >
      <br />
    </div >

  );
};

export default About;