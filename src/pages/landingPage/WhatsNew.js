import React from 'react'
import './WhatsNew.css'
import { Link } from 'react-router-dom';
function WhatsNew() {
    let values = [
        {
            thumb: 'http://127.0.0.1:8000/media/backend/images/bc-60R.jpg',
            headLine: 'New Product',
            headDiscription: 'AM 30',
            term: 'AM 30 Veterinary Anesthesia Machine'
        },
        {
            thumb: 'http://127.0.0.1:8000/media/backend/images/vetal3.jpg',   
            headLine: 'New Product',
            headDiscription: 'DAV 60',
            term: 'Furix Veterinary Ventilator '
        },
        {
            thumb: 'http://127.0.0.1:8000/media/backend/images/WATO_EX-65_Pro_Vet.jpg',
            headLine: 'New Product',
            headDiscription: 'FVE-15',
            term: '15 Veterinary Patient Monitor'
        },
        {
            thumb: 'http://127.0.0.1:8000/media/backend/images/upcome.jpg',
            headLine: 'New Product',
            headDiscription: 'FVP 1',
            term: 'VET Syringe Pump'

        },
    ]
    const display_component = () => {

        return (
            <>
                {values.map((value, index) => {
                    return (
                        <div key={value.term} className='col-xs-12 index-entry mt-1'>
                            <Link to='#imhgg' target='_blank'>
                                <div className='col-xs-5 m-3'>
                                    <div className='bg-img-right'>
                                        <img src={require("../../assets/static/images/logo.png")} alt="Geeks " />
                                    </div>
                                </div>
                            </Link>
                            <div className='col-xs-7 col-md-8 m-3'>
                                <h6 className='mt-0 fontbold'>{value.headLine}</h6>
                                <Link to='#imhgg' target='_blank'>
                                    <h6 className="text-limit lh-12">{value.headDiscription}</h6>
                                    <div className="index-date mt-10">{value.term}</div>
                                </Link>
                            </div>
                            <div className="bottom-line hidden-xs hidden-sm"></div>
                        </div>
                    )
                })}
            </>

        );
    }
    return (
        <div className='container mt-5 '>
            <h2 className='d-flex justify-content-center mb-5'>
            Latest Updates
            </h2>

            <div className="row" >

                {/* 1 of 2 */}
                <div className="col-xs-12 col-md-6 mb-30 mt-10" style={{ borderRight: '1px solid' }}>
                    <div className="img-log">

                        <img src={require("../../assets/static/images/what_new.jpeg")}alt="Geeks " /> 
                    </div>
                    <p className='mt-4 h4'>Information</p>

                    <Link to='#let`s see'>Furix Veterinary Academy Conducts Hands-on Workshop on Small Animal Endoscopy for Veterinarians from China and the Philippines</Link>
                    <div className="index-date mt-3 mb-4"> On April 16, 2023</div>

                    <Link to='#news data ' target='_blank'><p>FurixVet Academy, a global exchange platform for veterinarians under Furix Animal Medical, recently hosted the "Small Animal Endoscopy Hands-on Workshop" for veterinarians from China and the Philippines. The workshop, led by Dr's., President of Leader Animal Hospital and Honorary Veterinarian of Animals Asia Foundation, successfully gathered representatives from five distinguished animal hospitals in the Philippines.</p></Link>
                </div>
                {/* 2 of 2 */}
                <div className="row col-xs-12 col-md-6">
                    <div className='col-xs-12'>
                        <h2 >Highlights</h2>
                    </div>
                    {display_component()}

                </div>
            </div>
        </div>
    )
}

export default WhatsNew