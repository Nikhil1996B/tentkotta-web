import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

import Layout from "./components/Layout";
import Row from "./components/CheckoutComponents/Row";
import CheckoutForm from "./components/CheckoutForm";
import getDonutPrice from "./utils/get-checkout-price";

const StripeCheckoutForm = props => {
  const [price, setPrice] = useState(23.99);
  const history = useHistory();

  return (
    <Layout title="Get your subscription today">
      <CheckoutForm
        price={getDonutPrice(price)}
        onSuccessfulCheckout={() => history.push("/success")}
      />
    </Layout>
  );
};

export default StripeCheckoutForm;
