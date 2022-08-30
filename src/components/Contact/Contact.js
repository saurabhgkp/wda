import React from "react";

const Contact = () => {
  return (
    <div>
      <div class="breadcrumb-section breadcrumb-bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 text-center">
              <div class="breadcrumb-text">
                <p>Replacement</p>
                <h1>Contact Us</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mb-5 mb-lg-0">
            <div class="form-title">
              <h2>Have you any question?</h2>
              <p>
                Please feel free to contact us should you have any questions!
              </p>
            </div>
            <div id="form_status"></div>
            <div class="contact-form">
              <form
                type="POST"
                id="fruitkha-contact"
                onSubmit="return valid_datas( this );"
              >
                <p>
                  <input type="text" placeholder="Name" name="name" id="name" />
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    id="email"
                  />
                </p>
                <p>
                  <input
                    type="tel"
                    placeholder="Phone"
                    name="phone"
                    id="phone"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    id="subject"
                  />
                </p>
                <p>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Message"
                  ></textarea>
                </p>
                <input type="hidden" name="token" value="FsWga4&@f6aw" />
                <p>
                  <input type="submit" value="Submit" />
                </p>
              </form>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="contact-form-wrap">
              <div class="contact-form-box">
                <h4>
                  <i class="fas fa-map"></i> Shop Address
                </h4>
                <p>
                  Near Ashoka Gas Godam <br />
                  Singhariya,Kunraghat <br />
                  Gorakhpur U.P
                </p>
              </div>
              <div class="contact-form-box">
                <h4>
                  <i class="far fa-clock"></i> Shop Hours
                </h4>
                <p>
                  MON - FRIDAY: 8 to 9 PM <br /> SAT - SUN: 10 to 8 PM{" "}
                </p>
              </div>
              <div class="contact-form-box">
                <h4>
                  <i class="fas fa-address-book"></i> Contact
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
