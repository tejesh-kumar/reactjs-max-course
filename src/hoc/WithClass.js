import React from 'react'

// 1st method - HOC
// const withClass = props => (
//     <div className={props.classes}>
//         {props.children}
//     </div>
// );

// 2nd method - HOC
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent />
        </div>
    )
}

export default withClass;

// 2nd method
// Normal Js function(does not receive props), but returns a functional component(does not return JSX).
// WrappedComponent - Must start with capital letter as it serves as reference to a component.
// className or anything - 2nd argument refers to what we require in the HOC.
// Any number of arguments can be passed to HOC based on requirement. 
// This HOC's purpose is adding div with a class for styling.