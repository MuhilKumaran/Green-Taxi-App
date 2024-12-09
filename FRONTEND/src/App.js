import "./App.css";

import Home from "./Components/Home";
import Booking from "./Components/Booking";
import Contact from "./Components/Contact";
import AboutUS from "./Components/AboutUS";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Support from "./Components/Support";
import Driver from "./Components/Driver";
import PrivacyAndPolicy from "./Components/PrivacyAndPolicy";
import TermsAndCondition from "./Components/TermsAndCondition";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  const token = localStorage.getItem("token");
  const [loggedIn, setLoggedIn] = useState(token ? true:false);

  return (
    <>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUS />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/support" element={<Support />} />
        <Route path="/becomeDriver" element={<Driver />} />
        <Route path="/privacyAndPolicy" element={<PrivacyAndPolicy />} />
        <Route path="/termsAndCondition" element={<TermsAndCondition />} />
      </Routes>
    </>
  );
}

export default App;
