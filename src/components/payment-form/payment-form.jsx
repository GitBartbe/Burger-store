import { CardElement, PaymentElement } from "@stripe/react-stripe-js";
import CustomButton from "../custom-button/custom-button";
import "./payment-form.styles.scss";

const PaymentForm = () => {
  return (
    <div className="payment-form-container">
      <div className="payment-placeholder-container" >
        <CardElement />
      </div>
<div>
      <CustomButton className={"blue"}> Pay now </CustomButton>
    </div>
    </div>
  );
};

export default PaymentForm;
