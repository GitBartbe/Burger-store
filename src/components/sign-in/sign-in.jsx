import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

import {
  signInWithGooglePopup,
  createUseDocumentFromAuth,
} from "../../firebase/firebase";

import { SignInAuthUserWithEmailAndPassword } from "../../firebase/firebase";

import CustomButton from "../custom-button/custom-button";
import FormInput from "../form-input/form-input";
import "./sign-in.styles.scss";

const defaulFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {

  //------------------------------- Sign In with Google ---------------------------
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup(); 
    goToHomePage();
  };
//----------------------------------------------------------------------------------
  const [formFields, setFormFields] = useState(defaulFormFields);
  const { email, password } = formFields;

// --------------------------- Navigate to Home Page --------------------------------
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };
  //----------------- handle change -------------------------------------------------

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
   
  };

  //---------------------------- handle submit -------------------

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
       await SignInAuthUserWithEmailAndPassword(
        email,
        password
      );
      
      setFormFields(defaulFormFields);
      goToHomePage();
    } catch (error) {
      if (error) {
        console.log(error);
      }
    }
  };
//---------------------------------------------------------------------
  return (
    <div className="sign-in-container">
      <h2>Sign in with e-mail</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          onChange={handleChange}
          label="Email"
          type="email"
          name="email"
          value={email}
          autoComplete="email"
        />

        <FormInput
          onChange={handleChange}
          label="Password"
          type="password"
          name="password"
          value={password}
          autoComplete="email"
        />
        <div className="sign-in-button-container">
          <CustomButton type="submit" className={"red"}>
            Log In
          </CustomButton>
          <CustomButton className={"blue"} onClick={logGoogleUser}>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
