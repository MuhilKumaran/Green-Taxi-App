import React from "react";
import "../Styles/homeStyle.css";
import ola2 from "../IMAGES/ola2.svg";
import ola3 from "../IMAGES/ola3.svg";
import Footer from "./Footer";
import Corousel from "../Components/Corousel";
const Home = () => {
  return (
    <div className="body-box">
      <div className="container-fluid px-5 ">
        <div className="row">
          <br></br>
        </div>
        <div className="row d-flex justify-content-between">
          <div className="col-md-6 col-12 note">
            <h2>First Time in Coimbatore</h2>
            <p>
              Introducing Us{" "}
              <span style={{ color: "#41b31d" }}>GREEN TAXI</span> To You
              All,The First Electric Vehicle Cabs!.Experience The Eco Friendly
              Environment.Just Visit Us. Enjoy Your Ride With Pleasure On a
              Electric Vehicle!
            </p>
          </div>
          <div className="col-12  col-md-4">
            <iframe
              width={"100%"}
              height={"250px"}
              title="location"
              style={{
                frameborder: "0",
                marginheight: "0",
                marginwidth: "0",
              }}
              src="https://maps.google.com/maps?width=500&amp;height=300&amp;hl=en&amp;q=coimbatore+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.maps.ie/population/">Location</a>
            </iframe>
          </div>
        </div>
        <div className="row">
          <br></br>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 col-12">
            <div className="card-img">
              <img src={ola2} alt="e-car" width="100%" height="260px" />
            </div>
            <div className="card-text">
              <p>
                Prime Hatchbacks to Prime Sedans and Prime SUVs,you will find a
                ride in your budget at your convenience any time.
              </p>
            </div>
          </div>

          <div className="col-md-4 col-12">
            <div className="card-img">
              <img src={ola2} alt="e-car" width="100%" height="260px" />
            </div>
            <div className="card-text">
              <p>
                Book rides within the city with Daily, or take a trip to your
                favourite destinations outside the city with your Outstation.
              </p>
            </div>
          </div>

          <div className="col-md-4 col-12">
            <div className="card-img">
              <img src={ola3} alt="e-car" width="100%" height="260px" />
            </div>
            <div className="card-text">
              <p>
                Easily plan a day out without having to worry about conveyance
                with an hour-based package from Rental.
              </p>
            </div>
          </div>
        </div>
        {/* <Corousel/> */}
        <div className="row">
          <br></br>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default Home;
