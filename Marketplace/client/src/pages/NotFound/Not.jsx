import React from 'react'
import { Link } from 'react-router-dom'
import "./Not.css"
function Not() {
  return (
    <div className='Not-container'>
       <h1 className='Not-h1' >404</h1>
       <p className='Not-p1'>Page not found.</p>
       <section className='Not-sec'><Link to="/home">GO Back</Link></section>
    </div>
  )
}

export default Not