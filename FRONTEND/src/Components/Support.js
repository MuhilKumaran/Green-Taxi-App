import { failureAlert, successAlert } from "../Alerts/Alerts";
import React, { useState } from "react";
import axios from "axios";
import "../Styles/supportStyle.css";
import Footer from "./Footer";

const Support = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    feedback: "complaint",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const token = localStorage.getItem("token");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/customer/support",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add token to Authorization header
          },
        }
      );
      console.log(formData);
      successAlert("Support Request Sent");
      setFormData({
        name: "",
        email: "",
        mobile: "",
        city: "",
        feedback: "complaint",
        message: "",
      });
      console.log("Form submission response:", response);
    } catch (error) {
      console.log(formData);
      failureAlert("Error in Submitting Review");
      console.error("Error Sending Support Request:", error);
    }
  };

  return (
    <div>
      <br />
      <div className="container px-4">
        <div className="row justify-content-center">
          <div className="col-md-6 form-container">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <h2 className="text-center mb-4 sup-tit">Support</h2>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Mobile:</label>
                <input
                  type="tel"
                  className="form-control"
                  id="mobile"
                  name="mobile"
                  pattern="[0-9]{10}"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">City:</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="feedback">Feedback Type:</label>
                <select
                  className="form-select"
                  id="feedback"
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleChange}
                  required
                >
                  <option value="complaint">Complaint</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message:</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <br />
              <center>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </center>
            </form>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default Support;
