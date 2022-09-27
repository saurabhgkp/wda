import React, { useState } from "react";
import { toast } from "react-toastify";
import validator from "validator";

const Contact = () => {

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const validateForm = (e) =>{

    e.preventDefault()
    if(!userDetails.name || !userDetails.email || !userDetails.phone || !userDetails.subject  || !userDetails.message){
      toast.error('All fields are mandatory')
    }
    else if(!validator.isEmail(userDetails.email)){
      toast.error('Invalid email')
    }
    else if(!validator.isMobilePhone(userDetails.phone)){
      toast.error('Invalid phone number')
    }
    else{
      console.log("Submit")
      submitForm()
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]:value
    })
  };

  const submitForm = () =>{
  
    console.log('userDetails------->',userDetails)
  }

  return (
    <div>
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>Replacement</p>
                <h1>Contact Us</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mb-5 mb-lg-0">
            <div className="form-title">
              <h2>Have you any question?</h2>
              <p>
                Please feel free to contact us should you have any questions!
              </p>
            </div>
            <div id="form_status"></div>
            <div className="contact-form">
              <form
                type="POST"
                id="fruitkha-contact"
                onSubmit={validateForm}
              >
                <p>
                  <input type="text" placeholder="Name" name="name" id="name" value={userDetails.name} onChange={handleChange}/>
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    id="email"
                    value={userDetails.email}
                    onChange={handleChange}
                  />
                </p>
                <p>
                  <input
                    type="tel"
                    placeholder="Phone"
                    name="phone"
                    id="phone"
                    value={userDetails.phone}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    id="subject"
                    value={userDetails.subject}
                    onChange={handleChange}
                  />
                </p>
                <p>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Message"
                    value={userDetails.message}
                    onChange={handleChange}
                  />
                </p>
                <input type="hidden" name="token" value="FsWga4&@f6aw" />
                <p>
                  <input type="submit" value="Submit" />
                </p>
              </form>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact-form-wrap">
              <div className="contact-form-box">
                <h4>
                  <i className="fas fa-map"></i> Shop Address
                </h4>
                <p>
                  Near Ashoka Gas Godam <br />
                  Singhariya,Kunraghat <br />
                  Gorakhpur U.P
                </p>
              </div>
              <div className="contact-form-box">
                <h4>
                  <i className="far fa-clock"></i> Shop Hours
                </h4>
                <p>
                  MON - FRIDAY: 8 to 9 PM <br /> SAT - SUN: 10 to 8 PM{" "}
                </p>
              </div>
              <div className="contact-form-box">
                <h4>
                  <i className="fas fa-address-book"></i> Contact
                </h4>
                <p>
                  Phone: +91 6393647326 <br /> Email: pcologyofficial@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
