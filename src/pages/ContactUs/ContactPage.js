import React from 'react'
import contactUs from '../../assets/static/images/cont..jpg'
import apartMent from '../../assets/static/images/apartMent-3.jpg'
import ContactForm from './ContactForm'
import { Container, Image } from 'react-bootstrap'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'
import { ImageWithText } from '../../components/commonJsComponent/ImageWithCenterText'
import { Link } from 'react-router-dom'

function ContactPage() {
    return (
        <div className='marg-top-common'>

            <ImageWithText src={contactUs} altName={'Contact.jpg'}
                text={['','If you have any questions or need any supports, feel free to contact us.']}
                className='bottom-left px-5' />

            <Container>
                <div className="row mt-5" >
                    <div className="col-xs-12 col-md-6 mb-3 mt-10" style={{ borderRight: '1px solid' }}>
                        <div className='col-6 '>
                            <Image
                                src={apartMent} height={'400rem'} width={'200%'} />
                        </div>
                    </div>
                    <div className="row col-xs-12 col-md-6">
                        <div className='col-xs-12'>
                            <p className='h3'>Furix</p>
                            <p className='h3'>Headquarters</p>
                        </div>
                        <div className='col-xs-12'>
                            <p className='h4'>Our Address</p>
                            <p className='h6 px-2'>
                                6/F MEGA CUBE, <br />WANG KWONG ROAD,<br /> KOWLOON,<br /> HONG KONG
                            </p>
                        </div>
                        <div className='col-xs-12'>
                            <p className='h4'>Our Contacts</p>
                            <p className='px-2'>
                                <Link to="tel:+8613538187995">
                                    <FaPhone className='mb-1' /> &nbsp; +86 13538187995
                                </Link>
                                <br />
                                <Link to='mailto:sales@myfurix.com'>
                                    <FaEnvelope /> &nbsp; sales@myfurix.com
                                </Link>
                            </p>
                        </div>

                    </div>
                </div>

                <div className="row mt-5" >
                    <div className="col-xs-12 col-md-6 mb-4" >
                        <div className='text-center'>
                            <p className='h4 mb-2'> <FaMapMarkedAlt size={'1.4rem'} /> Location 1</p>
                            <br />
                            <p className='h6'>
                                6/F MEGA CUBE, <br />WANG KWONG ROAD,<br /> KOWLOON,<br /> HONG KONG
                            </p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6 mb-3">
                        <div className='text-center'>
                            <p className='h4 mb-2'><FaMapMarkedAlt size={'1.4rem'} /> Location 2</p>
                            <br />
                            <p className='h6'>
                                6/F MEGA CUBE, <br />WANG KWONG ROAD,<br /> KOWLOON,<br /> HONG KONG
                            </p>
                        </div>
                    </div>
                </div>

            </Container>

            <div style={{ backgroundColor: '#ececec' }}>
                <ContactForm />
            </div >
        </div>
    )
}

export default ContactPage
