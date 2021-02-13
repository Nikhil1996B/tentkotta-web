import React from 'react';
import styled from "@emotion/styled";
import GlobalStyles from "./CheckoutComponents/GlobalStyles";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Learning
// To best leverage Stripe’s advanced fraud functionality,
// include this script on every page, not just the checkout page.
// This allows Stripe to detect anomalous behavior that may be indicative
// of fraud as customers browse your website.
// Note: This is why we are adding it to a Layout component.

const stripePromise = loadStripe("pk_test_51IExDwKrvQRHiF5sQNaANpV2NIzC3HHEY5bfqduzyTHPe6IiY1Ij7lF4imX5jdbCYQ6DVMo3fI5egSexOsH1U0Mv00iWF6MVFW");

// TIP
// call loadStripe outside of a component
// in that way there's no chance it will get
// called more times than it needs to

const Layout = ({ children, title }) => {
  return (
    <>
      <GlobalStyles />
      <header>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </header>
      <Elements stripe={stripePromise}>{children}</Elements>
    </>
  );
};

export default Layout;
