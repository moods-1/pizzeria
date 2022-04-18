import React, { useState, useEffect } from "react";
import "./Checkout.scss";

const initialState = {
  showCheckoutPlus: false,
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
};

const CheckoutForm = (props) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let details = JSON.stringify(formData);
    localStorage.setItem("credentials", details);
    props.history.push("/pay");
  };

  useEffect(() => {
    if (localStorage.getItem("credentials")) {
      let credentials = JSON.parse(localStorage.getItem("credentials"));
      setFormData((prevState) => ({
        ...prevState,
        firstName: credentials.firstName,
        lastName: credentials.lastName,
        phone: credentials.phone,
        email: credentials.email,
      }));
    }
  }, []);

  return (
    <div className="checkout-main-container">
      <form onSubmit={handleSubmit}>
        <h1>Customer Details</h1>
        <input
          autoFocus
          required
          name="firstName"
          id="firstName"
          minLength="2"
          maxLength="30"
          type="text"
          placeholder="First name"
          value={formData.firstName || ""}
          onChange={(e) => handleChange(e)}
        />
        <input
          required
          name="lastName"
          id="lastName"
          minLength="2"
          maxLength="30"
          type="text"
          placeholder="Last name"
          value={formData.lastName || ""}
          onChange={(e) => handleChange(e)}
        />
        <input
          required
          name="phone"
          id="phone"
          minLength="10"
          maxLength="10"
          type="text"
          placeholder="9055555555"
          value={formData.phone || ""}
          onChange={(e) => handleChange(e)}
        />
        <input
          required
          name="email"
          id="email"
          type="email"
          placeholder="email@you.com"
          value={formData.email || ""}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default CheckoutForm;
