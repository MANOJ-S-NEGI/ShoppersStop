import React, { useState } from "react";
import { useDispatch } from "react-redux";

import SignUp from "../sign-up/sign-up.jsx";
import FormInput from "../input-form/input-form.jsx";
import Button from "../button/button.jsx";
import "./sign-in.styles.scss";
import { emailSignInStart, googleSignInStart } from '../../redux-store/user/user.action.js'
//import { signInAuthUserWithEmailAndPassword,  signInWithGooglePopup } from "../../utils/firebase/firebase.utils.js"
 

const defaultFormfiels = {
    email:"",
    password:"",
};

const SignInForm = () => {
    const dispatch  = useDispatch();

    const [formFields, setFormFields]= useState(defaultFormfiels);
    const {email, password } = formFields;

    const resetFormFields = () =>{
        setFormFields(defaultFormfiels);  
    };

    const signInWithGoogle = async () =>{
        dispatch(googleSignInStart());
    };

    const handleSubmit = async (event)=> {
        event.preventDefault();

        try{
            dispatch( emailSignInStart( email, password));
            resetFormFields();
           

        }catch(error){
            switch(error.code){
                case "auth/invalid-credential":
                    alert("auth/invalid-credential");
                    break;
                case "auth/user-not-found":
                    alert("user not found");
                    break;
                default:
                    console.log(error);
            }    
        }
    };
    
    const handleChange = (event)=> {
        const {name , value } = event.target;
        setFormFields({ ...formFields, [name]:value});
    };

    
    return (
        <div className="sign-in-form">
            <form onSubmit={handleSubmit} className="sign-in-form-container">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password </span>
                <FormInput 
                    label="Email" 
                    type="email"
                    name= "email" 
                    value = {email} 
                    onChange={handleChange} 
                    required
                /> 

                <FormInput 
                    label="Password" 
                    type="password"
                    name= "password" 
                    value = {password} 
                    onChange={handleChange} 
                    required
                />
                <div className="sign-in-button-container">
                    <Button type="submit" >SIGN IN</Button>
                    <Button type ="button" buttonType="google" onClick={signInWithGoogle}>GOOGLE SIGN IN</Button>

                </div>               
            </form>
            <div className="margin-container"></div>
            <div className="sign-up-container">
                <SignUp/>
            </div>
        </div>
    );
}
export default SignInForm;
