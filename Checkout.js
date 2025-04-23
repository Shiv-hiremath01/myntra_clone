// components/Checkout.js
import React from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const totalAmount = useSelector((state) => state.cart.totalPrice); // Make sure this is correct

  const loadRazorpay = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => openRazorpay();
    script.onerror = () => alert("Razorpay SDK failed to load. Check your connection.");
    document.body.appendChild(script);
  };

  const openRazorpay = () => {
    const options = {
      key: "rzp_test_1DP5mmOlF5G5ag", // Replace with your key
      amount: Math.floor(totalAmount * 100),
      currency: "INR",
      name: "Myntra Clone",
      description: "Test Payment",
      handler: function (response) {
        console.log("Payment Success:", response);
        alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "John Doe",
        email: "johndoe@example.com",
        contact: "9999999999"
      },
      notes: {
        address: "Myntra Clone Headquarters"
      },
      theme: {
        color: "#3399cc"
      },
      modal: {
        ondismiss: function () {
          alert("Payment popup closed.");
        }
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="container my-4">
      <h3>Total Amount: ₹{totalAmount}</h3>
      <button className="btn btn-primary" onClick={loadRazorpay}>
        Proceed to Pay
      </button>
    </div>
  );
};

export default Checkout;