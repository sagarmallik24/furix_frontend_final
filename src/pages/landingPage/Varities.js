import React from 'react'
import './landingPage.css'
import s1 from '../../assets/static/images/Companion_Animals-1.jpg'
import s2 from '../../assets/static/images/Farm Animals.jpg'
import s3 from '../../assets/static/images/Equine.jpg'
import s4 from '../../assets/static/images/Exotic Animals.jpg'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
function Varities() {

    let values = [
        {
            src: s1,
            name: "Companion Animals",
            href: "/Companion_Animals",
        },
        {
            src: s2,
            name: "Farm Animals",
            href: "/Farm_Animals",
        },
        {
            src: s3,
            name: "Equine",
            href: "/Equine",
        },
        {
            src: s4,
            name: "Exotic Animals",
            href: "/Exotic_Animals",
        },
    ]

    const DemoContaint = (data, index) => {
        let value = data
        return (
            <div className='demoContaint' key={index}>
                <Link to={{ pathname: value.href, state:{'vl':`value.src`} }}>
                    <img src={value.src} alt="Service icon" className='demoContaint-img' />
                    <h6 className='mt-2'>{value.name}</h6>
                    <br />
                </Link>
            </div>
        )
    }

    return (
        <div className='v-image-container container'>

            <div className='image-wrapper'>
                {values.map((value, index) => {
                    {
                        return DemoContaint(value, index)
                    }
                })
                }
            </div>
        </div>
    )
}

export default Varities