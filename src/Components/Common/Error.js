import React from "react";
import "../Styles/Error.css"

export default function Error(props){
    return ( 
        <h2 className="Error">Error: {props.data}</h2>
    );
};
