import React, { useState } from 'react'
import './ContactPage.css'
import './Myform2.css'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { isValidPhoneNumber } from 'react-phone-number-input'
import AddStudent from './AddStudent';
// isValidPhoneNumber('+12223333333') === false
// isValidPhoneNumber('+12133734253') === true

let registrationFields = [
  {
    placeholder: "First Name",
    value: "",
    name: "firstname",
    type: "text",
    hasError: false,
  },
  {
    placeholder: "Last Name",
    value: "",
    name: "lastname",
    type: "text",
    hasError: false,
  },
  {
    placeholder: "Email",
    value: "",
    name: "email",
    type: "email",
    hasError: false,
  },
];

function MyForm() {
  const [fields, updateFields] = useState(registrationFields);
  const [phonenumber, setPhonenumber] = useState()


  const handleSubmit = (event) => {
    event.preventDefault();

  }

  const updateFieldValue = (value, index) => {
    let fieldItems = [...fields];
    fieldItems[index].value = value;
    fieldItems[index].hasError = value === "";
    updateFields(fieldItems);
  };

  return (
    <form onSubmit={handleSubmit} >
      {fields.map((field, index) => {
        return (
          <div className={`input-control`} key={index}>
            <input
              type={field.type}
              value={field.value}
              name={field.name}
              onChange={(event) =>
                updateFieldValue(event.target.value, index)
              }
              placeholder={field.placeholder}
              className={`${field.hasError ? "input-error" : ""}`}
            />
          </div>
        );
      })}
      <PhoneInput
        className={`input-control-phone`}
        country="IN"
        value={phonenumber}
        onChange={setPhonenumber} />
      <input type="submit" className='submit-btn' />
    </form >
  )
}

const MyForm2 = () => {
  return (<div className="contain">
    <div className="wrapper">

      <div className="form">
        <h2 className="form-headline">Send us a message</h2>
        <form id="submit-form" action="">
          <p>
            <input id="name" className="form-input" type="text" placeholder="Your Name*" />
            <small className="name-error"></small>
          </p>
          <p>
            <input id="email" className="form-input" type="email" placeholder="Your Email*" />
            <small className="name-error"></small>
          </p>
          <p className="full-width">
            <input id="company-name" className="form-input" type="text" placeholder="Company Name*" required />
            <small></small>
          </p>
          <p className="full-width">
            <textarea minLength="20" id="message" cols="30" rows="7" placeholder="Your Message*" required ></textarea>
            <small></small>
          </p>
          <p className="full-width">
            {/* <input type="checkbox" id="checkbox" name="checkbox" checked /> Yes, I would like to receive communications by call / email about Company's services. */}
          
          
           <input type="submit" className="submit-btn" value="Submit" onClick="checkValidations()"/>  
           </p>
          <p className="full-width">
          
          {/* <input type="submit" className="submit-btn" value="Submit" onClick="checkValidations()"/> */}
           
          </p>
          
        </form>
      </div>

    </div>
  </div>
  );
}
function ContactForm() {
  return (
    <div className='container mt-3' >
      <br />
      <h4 className='text-center h2'>GET IN TOUCH</h4>

      <p className='d-flex justify-content-center'>If you are interested in our products or services, you may choose to leave your information here, and we will contact you shortly</p>

      <div className='text-center '>
        <AddStudent/>
      {/*{MyForm2()}*/}

      </div>

      <br />
    </div>
  )
}

export default ContactForm


