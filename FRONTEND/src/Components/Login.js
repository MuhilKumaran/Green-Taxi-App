import React, { useState } from "react";
import "../Styles/loginStyle.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { failureAlert, successAlert } from "../Alerts/Alerts";
const Login = ({setLoggedIn}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
        "http://localhost:8000/api/v1/customer/login",
        formData
      );
      console.log(response.data.message);
      const token = response.data.accessToken;
      localStorage.setItem("token", token);
      setLoggedIn(true);
      successAlert("Login Succesfull");
      // Handle successful login (e.g., redirect to dashboard page)
    } catch (error) {
      failureAlert("Login Failed, Try again");
      // console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="container login-container px-6">
        <h2 className="text-center mb-4 login-tit">Login</h2>
        <form onSubmit={handleSubmit}>
          {/* {error && <div className="alert alert-danger">{error}</div>} */}
          <div className="form-group">
            <label htmlFor="emailMobile">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter email/mobile"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <br></br>
          <Link to="/forgotPassword">
            <p className="text-center">Forgot Password? </p>
          </Link>
          <center>
            <button
              type="submit"
              className="btn btn-primary btn-block btn-login"
            >
              Login
            </button>
          </center>
          <div className="text-center mt-3">
            <Link to="/signup">
              <p className="s-up">SignUp</p>
            </Link>
          </div>
        </form>
      </div>
      <br></br>
      <Footer />
    </div>
  );
};

export default Login;
