import React from 'react'
/*
  Making an HTML Element such as "p", "div", and so on
*/
const TextualComponent = ({elemType= "div", classes, children}) => { 
    return React.createElement(elemType, {className: classes}, children); 
}; 

export default TextualComponent;