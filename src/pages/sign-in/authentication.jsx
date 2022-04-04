import CustomButton from "../../components/custom-button/custom-button";
import SignUpForm from "../../components/sign-up-form/sign-up-form";
import {
  signInWithGooglePopup,
  createUseDocumentFromAuth,
} from "../../firebase/firebase";

import "./sign-in.styles.scss";

const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUseDocumentFromAuth(user);
  };

  return (
    <div className="sign-in-container">
      <h1>Sign in Page</h1>
      <CustomButton className={"blue"} onClick={logGoogleUser}>
        Sign In With Google
      </CustomButton>
      <SignUpForm />
    </div>
  );
};

export default Authentication;
