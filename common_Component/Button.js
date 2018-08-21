import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Background from '../images/deal-1-black.png';
import "../css/styles.css";

const Button = ({buttonStyle,buttonContent,fontContent}) =>  (
     <button className = {buttonStyle}> <span className={buttonContent}>{fontContent}</span>
    </button>
)

export default Button;
