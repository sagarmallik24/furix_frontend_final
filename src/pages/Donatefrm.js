import React from 'react'
import serviceImg from '../assets/static/images/donate1.jpg'
import './Service/Service.css'
import { Container } from 'react-bootstrap'
import { FaEnvelope } from 'react-icons/fa'
import { ImageTextSol,ImageWithText } from '../components/commonJsComponent/ImageWithCenterText'
//import { ImageWithText } from '../../components/commonJsComponent/ImageWithCenterText'
import { Link } from 'react-router-dom'
import ContactForm from './ContactUs/ContactForm';

function Donate() {
    return (
        <div className='marg-top-common'>
            <section className='service-section'>
            <ImageTextSol src={serviceImg} altName={'ivd.jpg'} text={[' We actively participate in', ' Animal Welfare']} />
           


              {/*  <ImageWithText src={serviceImg} altName={'serviceImg.jpg' }
                    text={['We contribute on', ' Animal Care']}
                      className='mid-right' style={{width:'100%'}} />*/}
            </section>

            <section className='service-section m-5'>
                <h3>"Worldwide Service Support"</h3>
                <Link to='mailto:sales@myfurix.com'>
                    <FaEnvelope /> &nbsp; sales@myfurix.com
                </Link>
            </section>

            <div className='service-bg'>

                <section className='service-section m-5'>
                    <Container >
                        <br />
                        <h2 className='m-3'>Donation Service </h2>
                        <p className='mb-5'>
                        At Furix Animal Medical, our commitment to animals goes beyond our products and services. We are devoted to building a better world for all living beings by actively supporting animal welfare causes.</p>
                    </Container>
                </section>

                <section>
                    <Container>
                        <div className='row'>
                            <div className='col-xs-12 col-sm-12 col-md-12'>
                                <div className='tabs text-center mb-30'>
                                    <ul className="nav nav-tabs" >
                                        <li>
                                        <a className="nav-link active" data-bs-toggle="tab" data-bs-target="#C-Care" type="button" aria-controls="C-Care" aria-selected="true">"Our Approach"</a>
                                        </li>
                                        <li >
                                            <a className="nav-link" id="tech-Serv-tab" data-bs-toggle="tab" data-bs-target="#tech-Serv" type="button" aria-controls="tech-Serv" aria-selected="false"></a>
                                        </li>
                                        <li >
                                            <a className="nav-link" id="SP-support-tab" data-bs-toggle="tab" data-bs-target="#SP-support" type="button" aria-controls="SP-support" aria-selected="false"></a>
                                        </li>
                                    </ul>
                                </div>

                               {/* <div className="tab-content ">*/}
                                    <div className="tab-pane fade active " id="C-Care" >
                                        <section className='m-3'>
                                            <br />
                                            <h3 className='mt-2 mb-4'>
                                            What Constitutes Animal Welfare
                                            </h3>
                                            <p className='h6  text-secondary'>
                                            
                                            Animal welfare pertains to the condition of the animal; the manner in which an animal is treated falls under other terms such as animal care, animal husbandry, and humane treatment. Safeguarding an animal's welfare involves catering to its physical and mental requirements. Upholding animal welfare is a human obligation that encompasses mindfulness of all facets of animal well-being, including suitable shelter, supervision, nutrition, disease prevention and treatment, conscientious care, compassionate handling, and, when essential, humane euthanasia.
                                            </p>
                                            <h3 className='mt-5 mb-2'>
                                            Our Initiatives for Animal Well-being
                                            </h3>
                                            <p className='h6  text-secondary'>
                                            Explore the impactful initiatives we endorse. Ranging from delivering medical care and shelter to championing conservation endeavors, each project is thoughtfully selected to optimize positive outcomes for animals in distress.
                                            </p>
                                            <br />
                                        </section>
    </div>


                                {/*<div className="tab-pane fade active " id="C-Care" >

                                        <section className='m-3'>
                                            <br />
                                            <h3 className='mt-2 mb-2'>
                                            
                                            </h3>
                                            <p className='h6  text-secondary'>

                                            <h2>What is Animal Welfare </h2>
            <p>Animal welfare refers to the state of the animal; the treatment that an animal receives is covered by 
            other terms such as animal care, animal husbandry, and humane treatment. Protecting an animal's welfare means providing for its 
            physical and mental needs.Ensuring animal welfare is a human responsibility that includes consideration for all aspects of 
            animal well-being, including proper housing, management, nutrition, disease prevention and treatment, responsible care, humane handling,
             and, when necessary, humane euthanasia.</p>

                                            </p>
                                            <br />
                                            <br />

                                            <h3 className='mt-2 mb-2'>
                                                Our Animal Welfare Initiatives
                                            </h3>
                                            <p className='h6  text-secondary'>
                                            Discover the meaningful initiatives we support. From providing medical care and shelter to 
                                                <br />
                                                <br />
                                                promoting conservation efforts, each project is carefully chosen to maximize positive outcomes for animals in need.
                                            </p>
                                            <br />
                                            
                                            <br />
                                            <br />
                                        </section>
                                    </div>

                    */}
                                   {/* <div className="tab-pane fade" id="SP-support"    >
                                        <br />
                                        <section className='m-3'>
                                            <h3 className='mt-2 mb-4'>
                                                Spare Parts Support
                                            </h3>
                                            <p className='h6  text-secondary'>

                                                Furix Animal Medical keeps enough spare parts inventory for all products for at least five years after production is officially stopped.
                                            </p>
                                            <br />
                                            <br />
                                        </section>

                                   </div>*/}

                                
                            </div>
                     </div>
                        
                    </Container>
                </section>
                
                </div>
                
                <div style={{ backgroundColor: '#ececec' }}>
        <ContactForm />
      </div >
      <br />

            </div>
        
    )
}

export default Donate