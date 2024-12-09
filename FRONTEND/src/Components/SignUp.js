import React, { useState } from "react";
import "../Styles/signupStyle.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { failureAlert, successAlert } from "../Alerts/Alerts";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add form validation logic here if needed

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/customer/signup",
        formData
      );

      console.log(response.data);
      successAlert(response.data.message);
      // Handle successful signup (e.g., redirect to login page)
    } catch (error) {
      console.error("Error:", error);
      failureAlert(error.response.data.message);
      // Handle error (e.g., display error message)
    }
  };

  return (
    <div>
      <div className="container-fluid px-4">
        <div className="row justify-content-center">
          <div className="col-md-5 signup-container">
            <h2 className="signup-title">Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Enter your username"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                />
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
                    checked={formData.gender === "male"}
                    onChange={handleChange}
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
                    checked={formData.gender === "female"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="female">
                    Female
                  </label>
                </div>
                <br></br>
                <Link to="/login">
                  <center>
                    <p className="acc-info">Already have an account? Login</p>
                  </center>
                </Link>
              </div>
              <center>
                <button type="submit" className="btn btn-primary">
                  Signup
                </button>
              </center>
            </form>
          </div>
        </div>
        <div className="row">
          <br></br>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
