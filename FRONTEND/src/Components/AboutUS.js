import React from "react";
import "../Styles/aboutStyle.css";
import CHARGING from "../IMAGES/CHARGING.gif";
import Footer from "./Footer";
const AboutUS = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <br></br>
        </div>
        <div className="row">
          <div className="col-12 head d-flex align-items-center justify-content-center">
            <center>
              <h2>About US</h2>
            </center>
          </div>
        </div>
        <div className="row">
          <div className=" col-md-4 offset-md-4 col-12 charge d-flex align-items-center justify-content-center">
            <img src={CHARGING} alt="gif" width={"100%"} height={"400px"}></img>
          </div>
        </div>
        <div className="row">
          <br></br>
        </div>
        <div className="row">
          <div className="col-md-4 col-12 cards">
            <h2>Environmentally Friendly</h2>
            <p>
              One of the most significant advantages of electric vehicle cabs is
              their reduced environmental impact. They produce zero tailpipe
              emissions, which helps lower air pollution and decrease greenhouse
              gas emissions that contribute to climate change.{" "}
            </p>
          </div>

          <div className="col-md-4 col-12 cards">
            <h2> Quiet and Comfortable</h2>
            <p>
              Electric vehicles are known for their quiet operation compared to
              internal combustion engine vehicles. This quality enhances
              passenger comfort, as there's less noise pollution both inside the
              cab and in the surrounding environment.{" "}
            </p>
          </div>

          <div className="col-md-4 col-12 cards">
            <h2>Cost Savings</h2>
            <p>
              While the upfront cost of electric vehicles can be higher than
              their traditional counterparts, electric taxis generally have
              lower operating and maintenance costs. Electricity is generally
              cheaper than gasoline or diesel on a per-mile basis, and EVs have
              fewer moving parts,{" "}
            </p>
          </div>
        </div>
        <div className="row">
          <br></br>
        </div>
        <div className="row">
          <div className="col-md-4 col-12 cards">
            <h2>Regenerative Braking</h2>
            <p>
              Many electric vehicle cabs are equipped with regenerative braking
              systems. This technology captures and converts kinetic energy back
              into electrical energy during braking, which is then used to
              recharge the vehicle's battery.
            </p>
          </div>

          <div className="col-md-4 col-12 cards">
            <h2>Government Incentives</h2>
            <p>
              Many governments around the world offer incentives, subsidies, and
              tax breaks for the adoption of electric vehicles, including
              electric taxis. These incentives can significantly offset the
              higher initial costs of purchasing electric cabs, making them more
              financially appealing to taxi operators.
            </p>
          </div>

          <div className="col-md-4 col-12 cards">
            <h2>Charging Infrastructure</h2>
            <p>
              The expansion of charging infrastructure is a crucial factor for
              the widespread adoption of electric vehicle cabs. To ensure the
              availability of charging stations, many cities are investing in
              the development of charging networks, including dedicated charging
              points for taxis.
            </p>
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

export default AboutUS;
