import React from 'react'
import { Button } from 'react-bootstrap'
import "./Section.scss"

export default function Section6() {
  return (
    <div className='Section6 '>
        <div className="text">
            <h1>Never miss a story!</h1>
            <p>Get the freshest headlines and updates sent uninterrupted to your inbox.</p>
            <div className='form'>
                <input type="text" />
                <Button className='ms-1'>Subscribe</Button>
            </div>
            <p>By subscribing you agree to our Privacy Policy</p>
        </div>
        <hr style={{marginTop: "100px"}} />
    </div>
  )
}
