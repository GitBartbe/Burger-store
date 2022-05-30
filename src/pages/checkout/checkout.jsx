import { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import PaymentForm from '../../components/payment-form/payment-form';
import { CartContext } from '../../contexts/cart.context';

import './checkout.styles.scss';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className='checkout-container'>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>TOTAL: ${cartTotal}</div>
      <div className='payment-container'>
        <PaymentForm />
      </div>
      <div className='test-warning'>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: any future year - CVV: 123
      </div>
    </div>
  );
};

export default Checkout;
