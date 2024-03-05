import React, { useEffect, useState } from 'react'
import './cbs.css'

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

function CbsV2() {

    SwiperCore.use([Autoplay])

    const [imgs, setImgs] = useState([]);
    const data = async () => {
        const data = await axios.get(`${utils.getHost()}/get/bannersDetail`);
        setImgs(data.data)
        //  [carousal1, carousal2, carousal3, carousal1, carousal2, carousal3]
    }
    useEffect(() => {
        data()
    }, [])

    const more= '>> Learn More'

    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay]}
                slidesPerView={1}
                slidesPerGroup={1}
                spaceBetween={50}
                loop={true}
                autoplay={{ delay: 2000 }}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => ''}
                style={{overflow:'hidden'}}
            // onSlideChange={() => console.log('slide change')}
            >
                {imgs.map((data, index) => {
                    return <SwiperSlide key={index} >
                        <a href={"#" + index}>
                            <p className='more_about'>{more}</p>
                        </a>
                        <img className='slideImage' src={utils.getHost() + data.image} alt={data.image} />

                    </SwiperSlide>


                })}
            </Swiper>
        </>
    );
}

export default CbsV2