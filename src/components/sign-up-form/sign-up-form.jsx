import CustomButton from "../custom-button/custom-button";
import { useState } from "react";

import './sign-up-form.styles.scss'

import {
  createAuthUserWithEmailAndPassword,
  createUseDocumentFromAuth,
} from "../../firebase/firebase";
import FormInput from "../form-input/form-input";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};



const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  //------------------------------ chandle Submit --------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords does'nt mach");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUseDocumentFromAuth(user, { displayName });
      console.log("ok");
      setFormFields(defaultFormFields);
    } catch (error) {
      if (error.code === "auth/emaili-alredy-in-use") {
        alert("emaili-alredy-in-use");
      }
    }
  };
  //-------------------------------chandle Change ---------------------------------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  //-------------------------------------------------------------------------------------
  return (
    <div className="sign-up-container" >
      <h2>Don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display name"
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          autoComplete="userName"
          required
        />
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          autoComplete="email"
          required
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          autoComplete="password"
          required
        />

        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          autoComplete="confirmPassword"
          required
        />
        <CustomButton type={"submit"} className={"red"}>
          Submit{" "}
        </CustomButton>
      </form>
    </div>
  );
};

export default SignUpForm;
