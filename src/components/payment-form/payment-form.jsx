import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import StripeCheckout from 'react-stripe-checkout';
import logo from "../../assets/burger-logo.png";



const PaymentForm = () => {
  const {cartTotal } = useContext(CartContext);
  console.log(cartTotal)
  const priceForStripe = cartTotal * 100;
  
  const publishableKey ="pk_test_51KQzdrAVLp4w1GXsUlOh4lhf7wsdHInRzcBLe9L3A8wIZoGlKHHocKG07VjIpM8yGNulyraV2Zm5XqvEf6d9AgM000cZ8kgV6o";

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
