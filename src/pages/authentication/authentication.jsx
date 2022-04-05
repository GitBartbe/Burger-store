import SignIn from "../../components/sign-in/sign-in";
import SignUpForm from "../../components/sign-up-form/sign-up-form";


import "./authentication.styles.scss";

const Authentication = () => {
  

  return (
    <div className="authentication-container">
      <div className="component-container">
      <SignIn />
      </div>
      <div className="component-container">
      <SignUpForm />
      </div>
    </div>
  );
};

export default Authentication;
