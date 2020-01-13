import React from "react";
import './Styles/NavButton.css';

export default function NavButton(props){
    return(
        <button className="NavButton" onClick={props.handleToggleClick}>
            {props.text}
        </button>
    );
}
