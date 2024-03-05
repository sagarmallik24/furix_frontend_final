import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
//import { useHistory } from 'react-router-dom';

const AddStudent = () => {

    let history = useNavigate();


    //const [image, setImage] = useState(null)
    const [uname, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [cname, setCname] = useState(null)
    const [msg, setMsg] = useState(null)


    const addNewStudent = async () => {
        let formField = new FormData()
        formField.append('uname',uname)
        formField.append('email',email)
        formField.append('cname',cname)
        formField.append('msg',msg)

        
        await axios({
          method: 'post',
          url:'http://localhost:8000/get/todo/',
          data: formField
        }).then(response=>{
          console.log(response.data);
          history.push('/')
        })
    }
   
    return (

        <div className="contain">
        <div className="wrapper">
    
          <div className="form">
            <h2 className="form-headline">Send us a message</h2>
            <form id="submit-form" action="">
              <p>
                <input id="name" className="form-input" type="text" placeholder="Your Name*" name="name"
              value={uname}
              onChange={(e) => setName(e.target.value)}
           />
                <small className="name-error"></small>
              </p>
              <p>
                <input id="email" className="form-input" type="email" placeholder="Your Email*"  name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>
                <small className="name-error"></small>
              </p>
              <p className="full-width">
                <input id="company-name" className="form-input" type="text" placeholder="Company Name*"  name="cname"
              value={cname}
              onChange={(e) => setCname(e.target.value)} required />
                <small></small>
              </p>
              <p className="full-width">
                <textarea minLength="20" id="message" cols="30" rows="7" placeholder="Your Message*" name="msg"
              value={msg} onChange={(e) => setMsg(e.target.value)} required ></textarea>
                <small></small>
              </p>
              <p className="full-width">
                {/* <input type="checkbox" id="checkbox" name="checkbox" checked /> Yes, I would like to receive communications by call / email about Company's services. */}
              
              
               <input type="submit" className="submit-btn" value="Submit" onClick={addNewStudent}/>  
               <br></br>
               </p>
              <p className="full-width">
              
              {/* <input type="submit" className="submit-btn" value="Submit" onClick="checkValidations()"/> */}
               
              </p>
              
            </form>
          </div>
    
        </div>
      </div>





        
    );
};

export default AddStudent;