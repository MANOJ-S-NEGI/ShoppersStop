import { useState } from 'react';
import { useDispatch } from 'react-redux';
import FormInput from "../input-form/input-form.jsx";
import Button from "../button/button.jsx";
import { signUpStart } from '../../redux-store/user/user.action';
import { SignUpContainer } from './sign-up.styles';

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const dispatch = useDispatch();

    const resetFormFields = () => {
        setFormFields(defaultFormFields);  
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        if (password.length < 6) {
            alert("Password should be at least 6 characters");
            return;
        }

        try {
            // Dispatch the sign-up action
            dispatch(signUpStart(email, password, displayName));
            resetFormFields();

        } catch (error) {
            switch (error.code) {
                case "auth/email-already-in-use":
                    alert("Email is already in use");
                    break;
                default:
                    console.log("User creation encountered an error", error);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <SignUpContainer>
            <form onSubmit={handleSubmit}>
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <FormInput 
                    label="Display Name" 
                    type="text"
                    name="displayName" 
                    value={displayName} 
                    onChange={handleChange} 
                    required
                />

                <FormInput
                    label="Email" 
                    type="email"
                    name="email" 
                    value={email} 
                    onChange={handleChange} 
                    required
                />      

                <FormInput 
                    label="Password"
                    type="password" 
                    name="password"
                    value={password} 
                    onChange={handleChange} 
                    required
                />

                <FormInput 
                    label="Confirm Password"
                    type="password" 
                    name="confirmPassword" 
                    value={confirmPassword} 
                    onChange={handleChange} 
                    required
                />

                <Button type="submit">
                    Sign Up
                </Button>
            </form>
        </SignUpContainer>
    );
};

export default SignUp;
