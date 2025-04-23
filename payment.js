// pages/Payment.js
import React from "react";
import Navbar from "../components/Navbar";
import Checkout from "../components/Checkout";

const Payment = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h2 className="text-center mb-4">Payment Gateway</h2>
        <Checkout />
      </div>
    </>
  );
};

export default Payment;