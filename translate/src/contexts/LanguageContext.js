import React from "react";

// Create Context -> React.createContext({defaultValue})
// Note: defaultValue can be any valid JS type -> e.g. string, object, list, etc
export default React.createContext("english");

// Take a look at the Context Object to view the properties and methods available
// e.g. Consumer and Provider used to input and output values
// console.log(context);
