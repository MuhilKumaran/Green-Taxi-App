// import React, { useState } from "react";
// import axios from "axios"; // Axios for making HTTP requests
// import OLAA from "../IMAGES/OLAA.jpg";
// import "../Styles/bookingStyle.css";
// import Footer from "./Footer";
// import Corousel from "../Components/Corousel";
// import { failureAlert, successAlert } from "../Alerts/Alerts";
// const Booking = () => {
//   // State to store the entire form data as an object
//   const [formData, setFormData] = useState({
//     name: "",
//     mobile: "",
//     email: "",
//     pickDate: "",
//     pickLocation: "mylocation",
//     pickTime: "",
//     dropCity: "Coimbatore",
//     comment: "",
//   });

//   // Generic onChange handler to update the form data object
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData, // Spread the existing form data
//       [name]: value, // Dynamically update the specific field based on the input name
//     });
//   };

//   // Function to handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent the default form submission

//     try {
//       // Send the formData object to the backend
//       const token = localStorage.getItem("token");
//       const response = await axios.post(
//         "http://localhost:8000/api/v1/customer/booking",
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`, // Add token to Authorization header
//           },
//         }
//       );
//       console.log(response.data);
//       successAlert("Booking Successfull");
//     } catch (error) {
//       console.error("Error during booking", error);
//       failureAlert("Booking Failed");
//     }
//   };

//   return (
//     <div className="body-box">
//       <div className="container-fluid px-5">
//         <div className="row">
//           <br></br>
//         </div>
//         <div className="row">
//           <div className="col-md-8 col-12 info ">
//             <h2>CONVENIENT-BOOKING, {"  "} ON-TIME PICK-UP</h2>
//             <h2 style={{ textIndent: "20px" }}>
//               <span style={{ color: "#41b31d" }}>Green Taxi</span> Provides a
//               Seamless and Convenient Booking of Cabs. Enjoy Your Door Step Pick
//               Up
//             </h2>
//           </div>
//           <div className="col-md-4 col-12">
//             <img
//               src={OLAA}
//               alt="e-veh"
//               width="100%"
//               height={"300px"}
//               className="info-logo"
//             />
//           </div>
//         </div>
//         <div className="row">
//           <br></br>
//           <br></br>
//         </div>
//       </div>

//       <div className="container-fluid px-4">
//         <Corousel />
//         <br></br>
//         <br></br>
//       </div>

//       <div className="container px-4">
//         <div className="row justify-content-center ">
//           <div className="col-md-6 formdiv">
//             <h2 className="mb-4 text-center" style={{ fontStyle: "italic" }}>
//               START BOOKING
//             </h2>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-3">
//                 <label htmlFor="name" className="form-label">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   required
//                   id="name"
//                   name="name" // Ensure 'name' matches with the formData property
//                   placeholder="Enter your name"
//                   value={formData.name} // Bind state
//                   onChange={handleChange} // Use the same handler for all inputs
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="mobile" className="form-label">
//                   Mobile No
//                 </label>
//                 <input
//                   type="tel"
//                   className="form-control"
//                   required
//                   id="mobile"
//                   name="mobile"
//                   placeholder="1234567890"
//                   value={formData.mobile}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="mobile" className="form-label">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   required
//                   id="email"
//                   name="email"
//                   placeholder="abc@gmail.com"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="pickDate" className="form-label">
//                   Pick Up Date
//                 </label>
//                 <input
//                   type="date"
//                   className="form-control"
//                   required
//                   id="pickDate"
//                   name="pickDate"
//                   value={formData.pickDate}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="pickLocation" className="form-label">
//                   Pick Up Location
//                 </label>
//                 <select
//                   className="form-select"
//                   required
//                   id="pickLocation"
//                   name="pickLocation"
//                   value={formData.pickLocation}
//                   onChange={handleChange}
//                 >
//                   <option value="mylocation">My Location</option>
//                   <option value="Trichy">Trichy</option>
//                   <option value="Chennai">Chennai</option>
//                   <option value="Tanjore">Tanjore</option>
//                 </select>
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="pickTime" className="form-label">
//                   Pick Up Time
//                 </label>
//                 <input
//                   type="time"
//                   className="form-control"
//                   required
//                   id="pickTime"
//                   name="pickTime"
//                   value={formData.pickTime}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="dropCity" className="form-label">
//                   Drop City
//                 </label>
//                 <select
//                   className="form-select"
//                   required
//                   id="dropCity"
//                   name="dropCity"
//                   value={formData.dropCity}
//                   onChange={handleChange}
//                 >
//                   <option value="Coimbatore">Coimbatore</option>
//                   <option value="Trichy">Trichy</option>
//                   <option value="Chennai">Chennai</option>
//                   <option value="Tanjore">Tanjore</option>
//                 </select>
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="comment" className="form-label">
//                   Comment
//                 </label>
//                 <textarea
//                   className="form-control"
//                   id="comment"
//                   name="comment"
//                   rows="2"
//                   placeholder="Enter your message"
//                   value={formData.comment}
//                   onChange={handleChange}
//                 ></textarea>
//               </div>
//               <center>
//                 <button type="submit" className="btn btn-primary sub">
//                   Book Now
//                 </button>
//               </center>
//               <br></br>
//             </form>
//           </div>
//         </div>
//         <div className="row">
//           <br></br>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Booking;


import React, { useState } from "react";
import axios from "axios"; // Axios for making HTTP requests
import OLAA from "../IMAGES/OLAA.jpg";
import "../Styles/bookingStyle.css";
import Footer from "./Footer";
import Corousel from "../Components/Corousel";
import { failureAlert, successAlert } from "../Alerts/Alerts";

const Booking = () => {
  // State to store the entire form data as an object
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    pickDate: "",
    pickLocation: "mylocation",
    pickTime: "",
    dropCity: "Coimbatore",
    comment: "",
  });

  // State to manage loading status
  const [loading, setLoading] = useState(false);

  // Generic onChange handler to update the form data object
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, // Spread the existing form data
      [name]: value, // Dynamically update the specific field based on the input name
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    setLoading(true); // Set loading to true when booking starts

    try {
      // Send the formData object to the backend
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:8000/api/v1/customer/booking",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add token to Authorization header
          },
        }
      );
      console.log(response.data);
      successAlert("Booking Successful");
    } catch (error) {
      if (error.response.data.error=="Invalid Token")
        failureAlert("Login To Book");
      else
        failureAlert("Booking Failed");
    } finally {
      setLoading(false); // Set loading to false when booking completes
    }
  };

  return (
    <div className="body-box">
      <div className="container-fluid px-5">
        <div className="row">
          <br></br>
        </div>
        <div className="row">
          <div className="col-md-8 col-12 info ">
            <h2>CONVENIENT-BOOKING, {"  "} ON-TIME PICK-UP</h2>
            <h2 style={{ textIndent: "20px" }}>
              <span style={{ color: "#41b31d" }}>Green Taxi</span> Provides a
              Seamless and Convenient Booking of Cabs. Enjoy Your Door Step Pick
              Up
            </h2>
          </div>
          <div className="col-md-4 col-12">
            <img
              src={OLAA}
              alt="e-veh"
              width="100%"
              height={"300px"}
              className="info-logo"
            />
          </div>
        </div>
        <div className="row">
          <br></br>
          <br></br>
        </div>
      </div>

      <div className="container-fluid px-4">
        <Corousel />
        <br></br>
        <br></br>
      </div>

      <div className="container px-4">
        <div className="row justify-content-center ">
          <div className="col-md-6 formdiv">
            <h2 className="mb-4 text-center" style={{ fontStyle: "italic" }}>
              START BOOKING
            </h2>
            <form onSubmit={handleSubmit}>
              {/* Form fields remain unchanged */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  required
                  id="name"
                  name="name" // Ensure 'name' matches with the formData property
                  placeholder="Enter your name"
                  value={formData.name} // Bind state
                  onChange={handleChange} // Use the same handler for all inputs
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">
                  Mobile No
                </label>
                <input
                  type="tel"
                  className="form-control"
                  required
                  id="mobile"
                  name="mobile"
                  placeholder="1234567890"
                  value={formData.mobile}
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
                  required
                  id="email"
                  name="email"
                  placeholder="abc@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="pickDate" className="form-label">
                  Pick Up Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  required
                  id="pickDate"
                  name="pickDate"
                  value={formData.pickDate}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="pickLocation" className="form-label">
                  Pick Up Location
                </label>
                <select
                  className="form-select"
                  required
                  id="pickLocation"
                  name="pickLocation"
                  value={formData.pickLocation}
                  onChange={handleChange}
                >
                  <option value="mylocation">My Location</option>
                  <option value="Trichy">Trichy</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Tanjore">Tanjore</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="pickTime" className="form-label">
                  Pick Up Time
                </label>
                <input
                  type="time"
                  className="form-control"
                  required
                  id="pickTime"
                  name="pickTime"
                  value={formData.pickTime}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="dropCity" className="form-label">
                  Drop City
                </label>
                <select
                  className="form-select"
                  required
                  id="dropCity"
                  name="dropCity"
                  value={formData.dropCity}
                  onChange={handleChange}
                >
                  <option value="Coimbatore">Coimbatore</option>
                  <option value="Trichy">Trichy</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Tanjore">Tanjore</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="comment" className="form-label">
                  Comment
                </label>
                <textarea
                  className="form-control"
                  id="comment"
                  name="comment"
                  rows="2"
                  placeholder="Enter your message"
                  value={formData.comment}
                  onChange={handleChange}
                ></textarea>
              </div>
              <center>
                <button type="submit" className="btn btn-primary sub" disabled={loading}>
                  {loading ? "Booking..." : "Book Now"} {/* Change button text based on loading state */}
                </button>
              </center>
              <br></br>
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

export default Booking;
