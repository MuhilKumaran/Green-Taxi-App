const db = require("../mysql");
const util = require("util");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

const { createTokens } = require("../JWT");

exports.addCustomer = async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, phone, password, gender } = req.body;

    // Hash the password
    const hashPassword = await bcrypt.hash(password, 10);

    // SQL query
    const sql =
      "INSERT INTO greentaxi_customers (email,name,phone,password,gender) VALUES (?,?,?,?,?)";

    // Convert db.query to a promise
    const query = util.promisify(db.query).bind(db);

    // Execute the query
    await query(sql, [email, name, phone, hashPassword, gender]);

    // Send success response
    return res.status(200).json({
      status: true,
      type: "Sign Up",
      message: "Sign Up Successful",
    });
  } catch (err) {
    console.error("Error inserting customer details:", err);

    if (err.code === "ER_DUP_ENTRY") {
      // Handle duplicate entry error
      return res.status(400).json({
        status: false,
        type: "Sign Up",
        message: "User Already Registered",
      });
    }

    // Handle general errors
    return res
      .status(500)
      .json({ status: false, message: "Error inserting customer details" });
  }
};

exports.getCustomer = async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;

    const sql = `
      SELECT email, password
      FROM greentaxi_customers 
      WHERE email = ?
    `;

    // Promisify and bind db.query
    const query = util.promisify(db.query).bind(db);

    // Fetch the user data
    const result = await query(sql, [email]);

    if (result.length === 0) {
      return res.status(404).json({ status: false, message: "User not found" });
    }

    const userdata = result[0];
    console.log(userdata.password);

    // Compare the passwords
    const match = await bcrypt.compare(password, userdata.password);
    if (!match) {
      return res
        .status(400)
        .json({ status: false, message: "Invalid Password" });
    }

    // Generate the access token
    const accessToken = createTokens(userdata);

    return res.status(200).json({ status: true, userdata, accessToken });
  } catch (err) {
    console.error("Error in getCustomer:", err);
    return res
      .status(500)
      .json({ status: false, message: "Error in finding user" });
  }
};

exports.sendSupportMessage = async (req, res) => {
  try {
    console.log(req.body);
    const { email, name, mobile, city, feedback, message } = req.body;

    const sql =
      "INSERT INTO greentaxi_reviews (email, name, mobile, city, feedbackType, message) VALUES (?, ?, ?, ?, ?, ?)";

    // Promisify and bind db.query
    const query = util.promisify(db.query).bind(db);

    // Execute the query
    await query(sql, [email, name, mobile, city, feedback, message]);

    // Success response
    return res.status(200).json({
      status: true,
      type: "Review",
      message: "Review added Successfully",
    });
  } catch (err) {
    console.error("Error inserting review details:", err);

    // Error response
    return res
      .status(500)
      .json({ status: false, error: "Error inserting review details" });
  }
};

exports.getSupport = async (req, res) => {
  try {
    const sql =
      "SELECT email, name, message FROM reviews ORDER BY created_at DESC LIMIT 5";

    // Promisify and bind db.query
    const query = util.promisify(db.query).bind(db);

    // Execute the query
    const result = await query(sql);

    // Success response
    return res.status(200).json({ status: true, result });
  } catch (err) {
    console.error("Error fetching support messages:", err);

    // Error response
    return res
      .status(404)
      .json({ status: false, message: "Error in finding user" });
  }
};

exports.addBooking = (req, res) => {
  const {
    name,
    mobile,
    email,
    pickDate,
    pickLocation,
    pickTime,
    dropCity,
    comment,
  } = req.body;

  const sql =
    "INSERT INTO greentaxi_bookings(name, mobile, email, pick_date, pick_location, pick_time, drop_city, comment) VALUES (?,?,?,?,?,?,?,?)";

  db.query(
    sql,
    [name, mobile, email, pickDate, pickLocation, pickTime, dropCity, comment],
    (err, result) => {
      if (err) {
        console.error("Error in Booking:", err);
        return res
          .status(500)
          .json({ status: false, error: "Error in Booking" });
      }

      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: process.env.MAIL_ID,
          pass: process.env.MAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.MAIL_ID,
        to: email,
        subject: "Booking Confirmation",
        html: `
          <h1>Booking Confirmation</h1>
          <p>Dear ${name},</p>
          <p>Your ride has been successfully booked.</p>
          <h3>Booking Details:</h3>
          <ul>
            <li>Pick-up Date: ${pickDate}</li>
            <li>Pick-up Location: ${pickLocation}</li>
            <li>Pick-up Time: ${pickTime}</li>
            <li>Drop City: ${dropCity}</li>
            <li>Comments: ${comment}</li>
          </ul>
          <p>Thank you for choosing our service!</p>
        `,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error sending email:", error);
          return res.status(500).json({
            status: false,
            error: "Booking confirmed but failed to send email",
          });
        }
        console.log("Email sent: " + info.response);

        return res.status(200).json({
          status: true,
          type: "Booking",
          message: "Ride Successfully Booked and Email Sent",
        });
      });
    }
  );
};

exports.addBooking = async (req, res) => {
  const {
    name,
    mobile,
    email,
    pickDate,
    pickLocation,
    pickTime,
    dropCity,
    comment,
  } = req.body;

  const sql =
    "INSERT INTO greentaxi_bookings(name, mobile, email, pick_date, pick_location, pick_time, drop_city, comment) VALUES (?,?,?,?,?,?,?,?)";

  try {
    const query = util.promisify(db.query).bind(db);
    await query(sql, [
      name,
      mobile,
      email,
      pickDate,
      pickLocation,
      pickTime,
      dropCity,
      comment,
    ]);

    console.log("Booking added successfully:");
    console.log("Email "+process.env.MAIL_ID);
    console.log("Pass "+process.env.MAIL_PASS);
    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.MAIL_ID,
        pass: process.env.MAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.MAIL_ID,
      to: email,
      subject: "Booking Confirmation",
      html: `
        <h1>Booking Confirmation</h1>
        <p>Dear ${name},</p>
        <p>Your ride has been successfully booked.</p>
        <h3>Booking Details:</h3>
        <ul>
          <li>Pick-up Date: ${pickDate}</li>
          <li>Pick-up Location: ${pickLocation}</li>
          <li>Pick-up Time: ${pickTime}</li>
          <li>Drop City: ${dropCity}</li>
          <li>Comments: ${comment}</li>
        </ul>
        <p>Thank you for choosing our service!</p>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);

    // Respond to client
    res.status(200).json({
      status: true,
      type: "Booking",
      message: "Ride Successfully Booked and Email Sent",
    });
  } catch (error) {
    console.error("Error in Booking or Email:", error);
    res.status(500).json({
      status: false,
      error: "Error in Booking or Email",
    });
  }
};
