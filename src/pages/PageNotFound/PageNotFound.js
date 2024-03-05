import React from 'react'
import style from './PageNotFound.module.css'
import { Container } from 'react-bootstrap'
import Footer from '../../components/footer/Footer'
import { Link, Navigate } from 'react-router-dom'


function PageNotFound() {

  return (
    <div className={style.PageNotFound}>

      <Container>
        <div className='text-center mt-5'>

          <p>
            Link Not found / Not available this time
          </p>
        </div>
        <br />
        <br />
        <Link to='/'>
          <p className={style.button} > View home</p>
        </Link>

      </Container>
    </div>
  )
}

export default PageNotFound