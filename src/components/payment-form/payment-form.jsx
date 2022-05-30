import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import StripeCheckout from 'react-stripe-checkout';
import logo from "../../assets/burger-logo.png";

const key = process.env.REACT_APP_PUBLISHABLE_KEY;
  

const PaymentForm = () => {
  const {cartTotal } = useContext(CartContext);
  console.log(cartTotal)
  const priceForStripe = cartTotal * 100;
  
  const publishableKey = key;

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Burgers'
      billingAddress
      shippingAddress
      image = {logo} alt="logo"
      description={`Your total is $${cartTotal}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}
export default PaymentForm;
