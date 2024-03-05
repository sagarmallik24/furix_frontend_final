import React from 'react'
// import { Card } from 'react-bootstrap'
import './ProductCard.css'

// import { Avatar, ListItemAvatar } from "@mui/material";

function ProductCard(props) {
    let About = props.About
    let prodName = `Infusion Pump FIP-10`
    let logo = About.thumb
    let littleDiscription = `Size: L165 × W103 × H100mm. Weight: 1.3kg. Power: 100~240V, External DC Power: 12V~15V Batte...`

    const ProductDetail = (data) => {
        props.productData(data);
    }

    return (
        <div className="card-product">
            <div className="imgbox">
                <img src={logo} />
            </div>
            <div className="specifies">
                <h2>{prodName} <br /> </h2>
                <label>Description</label>
                <p>{littleDiscription}</p>
                <button className="btn btn-primary" onClick={() => ProductDetail(About)}>More...</button>
            </div>
        </div>
    )
}

export default ProductCard