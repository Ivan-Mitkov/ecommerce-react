import React from "react";
import StripeCheckout from "react-stripe-checkout";
//https://www.npmjs.com/package/react-stripe-checkout
const StripeButton = ({ price }) => {
  //price must be in cents
  const priceForStripe = parseInt(price * 100);
  const publishableKey =
    "pk_test_51HajPfLKqKY72FXroAhIwTf3CHtWZhrGLri7AG1OI3ikPiB1HlGeSDbZwmYXri22T4GKySTV1G87yL6dKM287i5k00132u5TBD";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Demo Button"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/Cuz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    ></StripeCheckout>
  );
};

export default StripeButton;
