import React from 'react'
import Heading from '../Heading'
import Data from './Data'
import Form from './Form'
import './Contact.css'

const Contact = () => {
  return (
    <>
      <div className="container-fluid "  id="contact" style={{paddingTop:"75px"}}>
        <Heading title="Contact" desp="Want to Know" size="85px" />
        <div className="row" style={{height:"100vh"}}>
          <div className="col-6">
              <Data />
          </div>
          <div className="col-6">
              <Form />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact