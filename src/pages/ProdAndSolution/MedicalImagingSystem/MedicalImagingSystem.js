import React, { useEffect, useRef, useState } from 'react'

import { ImageTextSol, ImageWithText } from '../../../components/commonJsComponent/ImageWithCenterText'
import ContactForm from '../../ContactUs/ContactForm'
import axios from 'axios'
import utils from '../../../assets/utils'
import dummyimage2 from '../../../assets/static/images/product/Vetus E7.jpg'
import dummyimage from '../../../assets/static/images/staticMachineImg.jpg'
import misThumb from '../../../assets/static/images/f1.jpg'
import { ProductCard } from '../Products/prodCard'
import './MedicalImagingSystem.css'
function MedicalImagingSystem() {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
        //data()

    }, [])

    const [csb_prodList, setcsb_prodList] = useState([]);
    const [drs_prodList, setdrs_prodList] = useState([]);
    const [ps_prodList, setPs_prodList] = useState([]);
    
    const fetchcart = async () => {
        const result = await axios.get('http://localhost:8000/cart/?sub_category=cart');

        console.log(result.data)
        setcsb_prodList(result.data)
    }
    const fetchport = async () => {
        const result1 = await axios.get('http://localhost:8000/cart/?sub_category=portable');

        console.log(result1.data)
        setPs_prodList(result1.data)
    }
    
    const fetchdir = async () => {
        const result2 = await axios.get('http://localhost:8000/cart/?sub_category=drs');

        console.log(result2.data)
        setdrs_prodList(result2.data)
    }
    
       
        {/*const result = await axios.get('http://localhost:8000/get/');

        console.log(result.data)
    setcsb_prodList(result.data)*/}
    

    useEffect(() => {
        fetchcart();
    }, [])
    useEffect(() => {
        fetchport();
    }, [])
    useEffect(() => {
        fetchdir();
    }, [])

  {/*  const data = async () => {
        await axios.get(`${utils.getHost()}/get/`).then((data) => {
            setcsb_prodList(data.data)
        })
        }
    */}
    
        {/*  await axios.get(`${utils.getHost()}/get/product/category=1&id=1`).then((data) => {
            setcsb_prodList(data.data)
        })
        await axios.get(`${utils.getHost()}/get/product/category=1&id=2`).then((data) => {
            setdrs_prodList(data.data)
        })
        await axios.get(`${utils.getHost()}/get/product/category=1&id=3`).then((data) => {
            setPs_prodList(data.data)
        })*/}
    


    const cbsRef = useRef(null)
    const psRef = useRef(null)
    const drsRef = useRef(null)

    const cbsScroll = () => cbsRef.current.scrollIntoView()
    const psScroll = () => psRef.current.scrollIntoView()
    const drsScroll = () => drsRef.current.scrollIntoView()


    useEffect(() => {
        if (window.location.href.endsWith('#CBS'))
            cbsScroll();

        if (window.location.href.endsWith('#PS'))
            psScroll();

        if (window.location.href.endsWith('#DRS'))
            drsScroll()

    }, [])

    let mainPage = 'MIS'
    const disc = `Our ultrasound imaging solutions, encompassing both cart-based and portable systems, are crafted to elevate veterinarians' diagnostic assurance with exceptional image quality, specialized veterinary parameters, and a user-friendly workflow. Leveraging profound insights into our customers, we provide substantial advantages to veterinarians by delivering visualized animal care.`

    return (
        <div className='marg-top-common'>

            <section className='mis-s1'>
                {/* <ImageWithText src={misThumb} altName={'mis.jpg'} text={['Medical Imaging System', 'Confidence in Sight', disc]} key={'mis-s1'} className='bottom-left' /> */}
               <ImageTextSol  src={misThumb} altName={'mis.jpg'} text={['Advanced Medical  Imaging Technology', 'Assurance in Vision', disc]} />
            </section>


            <section className={'container mis-s2 mt-5 mb-2 '} ref={cbsRef} style={{ background: '#fff' }}>
                <div className='form-headline'>
                    <p className='h2 d-flex justify-content-center mb-5 ' >"System Utilizing a Cart Configuration"</p>
                </div>
                <div className="products">
                    <div className='ProductCard'>
               {/* <a href="/en/product/Vetus_9"><img src="https://www.furixanimal.com/n0/zeyqf1/220921/732/jpg/ram9c4at.jpg" alt="Product" /></a>
    			<h3><a href="/en/product/Vetus_9">Vetus 9</a></h3>
                
                <a href="/en/product/Vetus_8"><img src="https://www.furixanimal.com/n0/ey98cy/210713/528/jpg/1bv5yssm.jpg" alt="Product" /></a>
    			<h3><a href="/en/product/Vetus_8">Vetus 8</a></h3>
                
                <a href="/en/product/Vetus_7"><img src="https://www.furixanimal.com/n0/begmh7/210713/204/jpg/an0wivg8.jpg" alt="Product" /></a>
    			<h3><a href="/en/product/Vetus_7">Vetus 7</a></h3>

                <a href="/en/product/Vetus_50"><img src="https://www.furixanimal.com/n0/tdwlk3/231108/324/jpg/ik4a8dni.jpg" alt="Product" /></a>
    			<h3><a href="/en/product/Vetus_50">Vetus 50</a></h3>
                
                <a href="/en/product/Vetus_5Exp"><img src="https://www.furixanimal.com/n0/sml1tm/210713/788/jpg/muuaw35u.jpg" alt="Product" /></a>
    			<h3><a href="/en/product/Vetus_5Exp">Vetus 5Exp</a></h3>

                <a href="/en/product/Vetus_5"><img src="https://www.furixanimal.com/n0/g2nspd/210713/141/jpg/ebaags6g.jpg" alt="Product" /></a>
    <h3><a href="/en/product/Vetus_5">Vetus 5</a></h3>*/}

                </div>
                    {csb_prodList &&
                        csb_prodList.map((product) => (<ProductCard key={product.id} product={product} category={mainPage} />
                  ))}
                </div>
            </section>

            <section className='container mis-s3 mt-5 mb-4' ref={psRef}>
                <div className='form-headline'>
                    <p className='h2 d-flex justify-content-center text-center mb-5 '>Mobile System</p>
                </div>
                <div className="products">
               {/* <a href="/en/product/Vetus_E7"><img src="https://www.furixanimal.com/n0/xw1qwn/211221/337/jpg/pxvmddmc.jpg" alt="Product" /></a>
    			<h3><a href="/en/product/Vetus_E7">Vetus E7</a></h3>

                <a href="/en/product/M9Vet"><img src="https://www.furixanimal.com/n0/jbwiux/210713/225/jpg/zbmviwnc.jpg" alt="Product" /></a>
    			<h3><a href="/en/product/M9Vet">M9Vet</a></h3>

                <a href="/en/product/Vetus_EQ"><img src="https://www.furixanimal.com/n0/ss5ixf/230614/1/jpg/ljjv9ptt.jpg" alt="Product" /></a>
    								<h3><a href="/en/product/Vetus_EQ">Vetus EQ</a></h3>
    							
                <a href="/en/product/TE5_Vet"><img src="https://www.furixanimal.com/n0/13wnm4/211105/280/jpg/5jtrfrrt.jpg" alt="Product" /></a>
    			<h3><a href="/en/product/TE5_Vet">TE5 Vet</a></h3>

                <a href="/en/product/M6Vet"><img src="https://www.furixanimal.com/n0/2fvjtp/210713/426/jpg/gfukrkzz.jpg" alt="Product" /></a>
    			<h3><a href="/en/product/M6Vet">M6Vet</a></h3>	

                <a href="/en/product/Z60_Vet"><img src="https://www.furixanimal.com/n0/xqccfb/210713/838/jpg/ffsooiqj.jpg" alt="Product" /></a>
    								<h3><a href="/en/product/Z60_Vet">Z60 Vet</a></h3>
    		
               <a href="/en/product/DP-50_Vet"><img src="https://www.furixanimal.com/n0/fj1don/210713/463/jpg/fxe1fmk5.jpg" alt="Product" /></a>
    				<h3><a href="/en/product/DP-50_Vet">DP-50 Vet</a></h3>
    							
                                
                <a href="/en/product/DP-30_Vet"><img src="https://www.furixanimal.com/n0/u4nw5h/210713/667/jpg/qalez97m.jpg" alt="Product" /></a>
    								<h3><a href="/en/product/DP-30_Vet">DP-30 Vet</a></h3>
    							
			
                    */}
                    {ps_prodList &&
                        ps_prodList.map((product) => (<ProductCard key={product.id} product={product} category={mainPage} />
                        ))}
                </div>
            </section>

            <section className='container mis-s4 mt-5 mb-4' ref={drsRef}>
                <div className='form-headline'>
                    <p className='h2 d-flex justify-content-center mb-5'>Digital X-ray System</p>
                </div>
                <div className="products">

              {/*
                <a href="/en/product/VetiX_S300"><img src="https://www.furixanimal.com/n0/zrxaan/230927/574/jpg/xqyphaho.jpg" alt="Product" /></a>
    			<h3><a href="/en/product/VetiX_S300">VetiX S300</a></h3>
    							
                <a href="/en/product/VetiX_P8"><img src="https://www.furixanimal.com/n0/3f6ks4/220113/298/jpg/hzsxxqj3.jpg" alt="Product" /></a>
    			<h3><a href="/en/product/VetiX_P8">VetiX P8</a></h3>
                    */}
                    {drs_prodList &&
                        drs_prodList.map((product) => (<ProductCard key={product.id} product={product} category={mainPage} />
                        ))}
                </div>
            </section>

            <section className='contactus' >
                <ContactForm />
            </section>

        </div >
    )
}

export default MedicalImagingSystem