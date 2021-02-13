import React from 'react';
import FormField from "./FormField";

const BillingDetailsFields = () => {
  return (
    <>
      <FormField
        name="name"
        label="Name"
        type="text"
        placeholder="Name"
        required
      />
      <FormField
        name="email"
        label="Email"
        type="email"
        placeholder="email@example.com"
        required
      />
      <FormField
        name="address"
        label="Address"
        type="text"
        placeholder="123 Street Name/ Loacality"
        required
      />
      <FormField
        name="city"
        label="City"
        type="text"
        placeholder="City Name"
        required
      />
      <FormField
        name="state"
        label="State"
        type="text"
        placeholder="State Name"
        required
      />
      <FormField
        name="zip"
        label="ZIP"
        type="text"
        placeholder="123456"
        required
      />
    </>
  );
};

export default BillingDetailsFields;
