import React from 'react';
import "./button.styles.scss";

const BUTTON_TYPE_CLASSES ={
    google : "google-sign-in",
    inverted: "inverted",
};
const Button = ({ isProcessingButton=false, buttonType, children, ...otherProps}) =>{
    return(
        <button 
            className = {`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
            { ...otherProps }>
                
                {isProcessingButton ? <div className="loadSpinner" /> : children}
        </button>

    );
}

export default Button;