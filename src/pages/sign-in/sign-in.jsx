import { signInWithGooglePopup, createUseDocumentFromAuth } from '../../firebase/firebase';


import './sign-in.styles.scss'


const SignIn =() => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUseDocumentFromAuth(user);
    }

    return(
        <div className='sign-in-container'>
            <h1>Sign in Page</h1>    
            <button onClick={logGoogleUser}>Sign In</button> 
             </div>
    )
}


export default SignIn;