import React, { useEffect } from 'react'
import './ImageWithCenterText.css'


export function ImageTextSol({ src, altName, text }) {
  return (<section  className="heading heading-8 bg-section" style={{ backgroundImage: `url(${src})`,width:'100%' }} >
    <div className="pos-vertical-center">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6 ">
            <p style={{"color":"#17830A  "}} className="heading--subtitle">{text[0]}</p>
            <h2 style={{"color":"#17830A  "}} className="heading--title">{text[1]}</h2>
            <p  style={{"color":"#17830A  "}}className="heading--desc">{text[2]}</p>
          </div>
        </div>
      </div>
    </div>
  </section>)
}


export function ImageWithText({ src, altName, text, className = 'centered' }) {
  return (
    <div className='container-imageShow' >
      <img
        alt={altName}
        src={src}
      />

      <div className={className} >
        {text.map((data, index) => {
          if (index > 0) {
            return <div key={data}>
              <p className='h6 w-auto'>
                {data}
              </p>
            </div>
          }
          else
            return <div key={data} >
              <span style={{ fontWeight: 'bold', color: '#fff', fontSize:'3.5vmax' }}>
                {data}
              </span>
            </div>
        })}
      </div>
    </div>
  );
};
