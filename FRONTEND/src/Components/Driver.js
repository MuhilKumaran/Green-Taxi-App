import React from "react";
import "../Styles/driverStyle.css";
import Footer from "./Footer";
const Driver = () => {
  return (
    <div>
      <div className="container-fluid px-4">
        <div className="row justify-content-center">
          <div className="col-md-5 driver-container">
            <h2 className="text-center mb-4 driver-title">Become a Driver</h2>
            <form action="#" method="post">
              <div className="mb-3">
                <label htmlFor="FullName" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="FullName"
                  placeholder="Enter Full Name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter Email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">
                  Mobile No
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="mobile"
                  placeholder="Enter Mobile No"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="licence" className="form-label">
                  Upload your Driving Licence (As pdf)
                </label>
                <input type="file" accept=".pdf" className="form-control" id="licence" />
              </div>
              <div className="mb-3">
                <label htmlFor="gender" className="form-label">
                  Gender
                </label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                  />
                  <label className="form-check-label" htmlFor="male">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                  />
                  <label className="form-check-label" htmlFor="female">
                    Female
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="experience" className="form-label">
                  Years Of Experience
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="experience"
                  placeholder="Years of Experience"
                />
              </div>
              <div className="mb-3">
                <center>
                  <input type="submit" className="btn btn-primary" />
                </center>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br></br>
      <Footer />
    </div>
  );
};

export default Driver;
