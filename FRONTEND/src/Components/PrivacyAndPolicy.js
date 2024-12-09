import React from "react";
import "../Styles/privacyStyle.css";
import Footer from "./Footer";
const PrivacyAndPolicy = () => {
  return (
    <>
      <div className="container-fluid privacy-policy">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <br/>
            <h1 className="text-center">Privacy Policy</h1>
            <br/>
            <h1>Welcome to Green Taxi's Privacy Policy!</h1>

            <h2>Information Collection and Use</h2>
            <p>
              Green Taxi collects personal information when you use our
              services, including but not limited to:
            </p>
            <ul>
              <li>Location information when you use our cab booking service</li>
              <li>
                Contact details such as name, email, and phone number when you
                sign up or book a ride
              </li>
              <li>Payment information when you make transactions</li>
            </ul>

            <h2>Use of Information</h2>
            <p>
              We use the information we collect for various purposes, including:
            </p>
            <ul>
              <li>Providing and improving our cab booking services</li>
              <li>Communicating with you about your bookings and account</li>
              <li>Processing payments and preventing fraud</li>
              <li>Complying with legal obligations</li>
            </ul>

            <h2>Sharing of Information</h2>
            <p>We may share your personal information with:</p>
            <ul>
              <li>
                Our trusted partners and service providers for processing
                payments, providing customer support, etc.
              </li>
              <li>
                Law enforcement agencies or regulators when required by law or
                to protect our rights
              </li>
            </ul>

            <h2>Security</h2>
            <p>
              We take reasonable measures to protect your personal information
              from unauthorized access, alteration, or disclosure.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <a href="mailto:info@greentaxi.com">info@greentaxi.com</a>.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default PrivacyAndPolicy;
