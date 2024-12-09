import React from "react";

import Char from "../IMAGES/Char.gif";
import "../Styles/contactStyle.css";
import Footer from "./Footer";


const Contact = () => {
  return (
    <div>
      <div className="container-fluid px-5">
        <div className="row">
          <br></br>
        </div>
        <div className="row align-items-center">
          <div className="col-md-5 offset-md-4 col-12">
            <center>
              <h2 className="t-info">Contact Us</h2>
            </center>
          </div>
        </div>
        <div className="row info-box">
          <div className="col-md-4 col-12">
            <img src={Char} alt="Sample" width={"100%"} height={"450px"} />
          </div>
          <div className="col-md-8 col-12 d-flex align-items-center justify-content-around">
            <h2 className="t-info">Reach Us We Are Here To Help You</h2>
          </div>
        </div>
        <div className="row">
          <br></br>
        </div>
        {/* <div className="row">
          <div className="col-md-4 col-12 d-flex align-items-center">
            <h4>
              <i className="fa-solid fa-phone fa-2xl"></i> +91 9342407556
            </h4>
          </div>
          <div className="col-md-4 col-12 d-flex ">
            <h4>
              <i className="fa-solid fa-message fa-2xl"></i> info@greentaxi.com
            </h4>
          </div>
          <div className="col-md-4 col-12 d-flex ">
            <h4>
              <i className="fa-solid fa-message fa-2xl"></i>support@greentaxi.com
            </h4>
          </div>
        </div> */}
        
        <div>
          <br></br>
          <br></br>
        </div>
        <div className="row address-box">
          <div className="col-md-4 col-12">
            <h3 className="office-title">Head Office</h3>

            <p>
              Eagle Fleet Services (P) Ltd, #1226, Magudam Towers, Mettupalayam
              Road, Saibaba Colony, Coimbatore - 641043. Landline: 0422 4567890
            </p>
          </div>
          <div className="col-md-4 col-12">
            <h3 className="office-title">Branch Office</h3>
            <p>
              67-71, Dr Krishnasamy Mudaliyar Rd, Brookefields, Sukrawar Pettai,
              Ram Nagar, Coimbatore, Tamil Nadu 641001
            </p>
          </div>
          <div className="col-md-4 col-12">
            <h3 className="office-title">Branch Office</h3>
            <p>
              96, Broadway Square, off Avinashi Road, Indira Nagar, Civil
              Aerodrome Post, Coimbatore, Tamil Nadu 6410145
            </p>
          </div>
        </div>
        <div className="row">
          <br></br>
        </div>
        <div className="row address-box">
          <div className="col-md-4 col-12">
            <h3 className="office-title">Head Office</h3>
            <p>
              Eagle Fleet Services (P) Ltd, #1226, Magudam Towers, Mettupalayam
              Road, Saibaba Colony, Coimbatore - 641043. Landline: 0422 4567890
            </p>
          </div>
          <div className="col-md-4 col-12">
            <h3 className="office-title">Branch Office</h3>
            <p>
              67-71, Dr Krishnasamy Mudaliyar Rd, Brookefields, Sukrawar Pettai,
              Ram Nagar, Coimbatore, Tamil Nadu 641001
            </p>
          </div>
          <div className="col-md-4 col-12">
            <h3 className="office-title">Branch Office</h3>
            <p>
              96, Broadway Square, off Avinashi Road, Indira Nagar, Civil
              Aerodrome Post, Coimbatore, Tamil Nadu 6410145
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
