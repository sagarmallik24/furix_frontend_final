import React from 'react'
import serviceImg from '../../assets/static/images/servicePic.jpg'
import './Service.css'
import { Container } from 'react-bootstrap'
import { FaEnvelope } from 'react-icons/fa'
import { ImageWithText } from '../../components/commonJsComponent/ImageWithCenterText'
import { Link } from 'react-router-dom'

function Service() {
    return (
        <div className='marg-top-common'>
            <section className='service-section'>
                <ImageWithText src={serviceImg} altName={'serviceImg.jpg'}
                    text={['Readily Available Service', 'Better Animal Care']}
                    className='mid-right' />
            </section>

            <section className='service-section m-5'>
                <h3>Worldwide Service Support</h3>
                <Link to='mailto:sales@myfurix.com'>
                    <FaEnvelope /> &nbsp; sales@myfurix.com
                </Link>
            </section>

            <div className='service-bg'>

                <section className='service-section m-5'>
                    <Container >
                        <br />
                        <h2 className='m-3'>User-Centric Service Solutions</h2>
                        <p className='mb-5'>
                        With a worldwide service network, Furix Animal Medical delivers comprehensive service solutions to our customers promptly and efficiently, covering customer care, technical service, spare parts support, training, and more.</p>
                    </Container>
                </section>

                <section>
                    <Container>
                        <div className='row'>
                            <div className='col-xs-12 col-sm-12 col-md-12'>
                                <div className='tabs text-center mb-30'>
                                    <ul className="nav nav-tabs" >
                                        <li>
                                            <a className="nav-link active" data-bs-toggle="tab" data-bs-target="#C-Care" type="button" aria-controls="C-Care" aria-selected="true">
                                            Customer Support</a>
                                        </li>
                                        <li >
                                            <a className="nav-link" id="tech-Serv-tab" data-bs-toggle="tab" data-bs-target="#tech-Serv" type="button" aria-controls="tech-Serv" aria-selected="false">Technical Support</a>
                                        </li>
                                        <li >
                                            <a className="nav-link" id="SP-support-tab" data-bs-toggle="tab" data-bs-target="#SP-support" type="button" aria-controls="SP-support" aria-selected="false">Spare Parts Assistance</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="tab-content ">
                                    <div className="tab-pane fade active " id="C-Care" >
                                        <section className='m-3'>
                                            <br />
                                            <h3 className='mt-2 mb-4'>
                                            Worldwide Call Center
                                            </h3>
                                            <p className='h6  text-secondary'>
                                            Furix Animal Medical provides global support for service inquiries in various countries and languages through a worldwide call center network. Simply dial our hotline numbers for direct access to our Customer Support Specialists. Provide the instrument serial number and a brief description of the issue, and our specialists will guide you over the phone to swiftly address and resolve the problem.
                                            </p>
                                            <h3 className='mt-5 mb-2'>
                                            "Customer Feedback Survey"
                                            </h3>
                                            <p className='h6  text-secondary'>
                                            We always value feedback on your experience with Furix Animal Medical's products and services. An authorized Customer Support Specialist will conduct a satisfaction survey to gather insights for continuous improvement in our products and services.
                                            </p>
                                            <br />
                                        </section>
                                    </div>


                                    <div className="tab-pane fade" id="tech-Serv"    >

                                        <section className='m-3'>
                                            <br />
                                            <h3 className='mt-2 mb-2'>
                                                Technical Support
                                            </h3>
                                            <p className='h6  text-secondary'>

                                            Furix Animal Medical service representatives offer technical support for application and breakdown calls to customers and distributors through phone, email, or any other means throughout the entire life cycle of Furix Animal Medical instruments.
                                            </p>
                                            <br />
                                            <br />

                                            <h3 className='mt-2 mb-2'>
                                                Field Service
                                            </h3>
                                            <p className='h6  text-secondary'>
                                            "Furix Animal Medical service representatives offer preventive maintenance, calibration, breakdown repair, and other field services upon request."
                                                <br />
                                                <br />
                                                *Field service may be offered by authorized Furix Animal Medical service providers. The types of field services provided in different regions may vary based on local service providers.
                                            </p>
                                            <br />
                                            <h3 className='mt-2 mb-2'>
                                                Upgrade
                                            </h3>
                                            <p className='h6  text-secondary'>

                                            Furix Animal Medical offers a range of upgrade solutions, including value-added services, to fulfill customer requests related to function, application, or performance.
                                            </p>
                                            <br />
                                            <h3 className='mt-2 mb-2'>
                                                On-Demand Service
                                            </h3>
                                            <p className='h6  text-secondary'>

                                            Furix Animal Medical offers on-demand services to customers and distributors through mutual agreement.
                                            </p>
                                            <br />
                                            <br />
                                            <h3 className='mt-2 mb-4'>

                                                Warranty Extension
                                            </h3>
                                            <p className='h6  text-secondary'>

                                            Furix Animal Medical provides a warranty extension program to distributors, aiding in the management of service costs and sharing investment risks.
                                                <br />
                                                <br />
                                                *The warranty extension program may not be applicable to certain models or modules. For pricing and additional details, feel free to reach out to the Furix Animal Medical service department.
                                            </p>
                                            <br />
                                            <br />
                                        </section>
                                    </div>


                                    <div className="tab-pane fade" id="SP-support"    >
                                        <br />
                                        <section className='m-3'>
                                            <h3 className='mt-2 mb-4'>
                                                Spare Parts Support
                                            </h3>
                                            <p className='h6  text-secondary'>
                                            Furix Animal Medical maintains a sufficient inventory of spare parts for all products for at least five years after the official cessation of production.
                                            </p>
                                            <br />
                                            <br />
                                        </section>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </Container>
                </section>

            </div>
        </div>
    )
}

export default Service