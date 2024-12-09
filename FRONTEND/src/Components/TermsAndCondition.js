import React from "react";
import Footer from "./Footer";
import "../Styles/termscondStyle.css";
const TermsAndCondition = () => {
  return (
    <>
      <div className="container-fluid terms-conditions">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <br />
            <h1 className="text-center">Terms and Conditions</h1>
            <br />
            <h1>Welcome to Green Taxi's Terms and Conditions!</h1>

            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using our cab booking service, you agree to be
              bound by these Terms and Conditions.
            </p>

            <h2>2. Booking and Payments</h2>
            <p>
              When you book a ride through Green Taxi, you agree to pay the fare
              as displayed at the time of booking. Payment can be made via
              credit/debit card, mobile wallet, or cash.
            </p>

            <h2>3. Cancellation Policy</h2>
            <p>
              Customers may cancel bookings up to a certain time before the
              scheduled pickup time without incurring any cancellation charges.
              However, cancellations made after this time may be subject to a
              cancellation fee.
            </p>

            <h2>4. User Conduct</h2>
            <p>
              Users are expected to conduct themselves in a respectful and
              lawful manner while using our services. Any misuse or abuse of our
              platform, including but not limited to, harassment of drivers or
              other users, fraudulent activities, or any other violation of our
              policies, may result in suspension or termination of your account.
            </p>

            <h2>5. Limitation of Liability</h2>
            <p>
              Green Taxi shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages, or any loss of
              profits or revenues, whether incurred directly or indirectly,
              arising out of or in connection with your use of our services.
            </p>

            <h2>6. Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in
              accordance with the laws of India, without regard to its conflict
              of law provisions.
            </p>

            <h2>7. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms and
              Conditions at any time. Your continued use of the service after
              any such changes constitutes your acceptance of the new Terms and
              Conditions.
            </p>

            <h2>8. Contact Us</h2>
            <p>
              If you have any questions about these Terms and Conditions, please
              contact us at{" "}
              <a href="mailto:info@greentaxi.com">info@greentaxi.com</a>.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndCondition;
