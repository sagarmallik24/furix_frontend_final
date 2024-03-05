import React, { useState, useEffect } from 'react'
import logo from '../../assets/static/images/carousal/carousal1.jpg';
import './Product.css'
import {  Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

function Product() {
    let logooo = logo;
    const [output, setOutput] = useState([])

    // async function getOrginizations() {
    //     axios
    //         .get(`${utils.getHost()}/chat/get/org`, {
    //             headers: {
    //                 Authorization: `Bearer ${Token}`,
    //             },
    //         })
    //         .then(response => {
    //             const responseData = JSON.stringify(response.data);
    //             const data = JSON.parse(responseData);
    //             let val = []
    //             console.log(data);
    //             for (let i = 0; i < data.length; i++) {
    //                     val.push({
    //                         "orgId": data[i]?.id,
    //                         "orgName": data[i]?.meta_attributes,
    //                         "owner": data[i]?.user.username,
    //                         "email":data[i]?.email,
    //                         "phone_number":data[i]?.phone_number,
    //                         "about":data[i]?.about,
    //                         "thumb":data[i]?.image
    //                     })
    //             }
    //             setOutput(val)
    //         })
    // }

    useEffect(() => {
        let val = []
        for (let i = 0; i < 7; i++) {
            val.push({
                "prodId": i,
                "prodName": i + "prodName",
                "thumb": logooo,
            })
        }
        setOutput(val)
        // getOrginizations()
    }, [])


    const getProductData = (data) => {
    }

    const addActive = () => {
        return null;
    }

    let path_to_landingPage = '/'

    return (
        <div className='container'>
            <section className="section product" id="product" aria-label="product">
                <div className="title-wrapper">
                    <h2 className="h2 section-title">Popular Products</h2>
                    <ul className="filter-btn-list">

                        <li className="filter-btn-item">
                            <p className="filter-btn active" data-filter-btn="all" onClick={() => addActive()}>All Products</p>
                        </li>

                        <li className="filter-btn-item">
                            <p className="filter-btn" data-filter-btn="accessory">Accessory</p>
                        </li>

                        <li className="filter-btn-item">
                            <p className="filter-btn" data-filter-btn="monitoring">Monitoring</p>
                        </li>

                        <li className="filter-btn-item">
                            <p className="filter-btn" data-filter-btn="surgical">Surgical</p>
                        </li>

                    </ul>
                </div>

                <ul className="grid-list product-list" data-filter="all">
                    <div >
                        <Row>{output.map((e, i) => (
                            <Col key={i} md={3} >
                                <ProductCard About={e} productData={getProductData} />
                            </Col>
                        ))}
                        </Row>
                    </div>

                </ul>
            </section>


            <section className="section newsletter" aria-label="newsletter">
                <div className="container">
                    <div className="newsletter-card">
                        <div className="card-content">
                            <h2 className="h2 section-title">Our Newsletter</h2>
                            <p className="section-text">
                                Subscribe our newsletter and get discount 50% off
                            </p>
                        </div>
                        <form action="" className="card-form">
                            <input type="email" name="email_address" placeholder="Your email address" required className="email-field" />
                            <button type="submit" className="newsletter-btn" aria-label="subscribe">
                                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Product