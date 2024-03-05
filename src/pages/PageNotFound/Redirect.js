import React from 'react'
import { Navigate } from 'react-router-dom'

function Redirect() {
    return (<Navigate replace to="/404" />)
}

export default Redirect