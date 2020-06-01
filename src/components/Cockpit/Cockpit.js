import React, { useEffect, useRef } from 'react'

import classes from './Cockpit.css';


const cockpit = (props) => {
    const toggleBtnRef = useRef(null);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // HTTP requests...

        // setTimeout(() => {
        //     alert('Saved Data to cloud');
        // }, 1000);
        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    }, []);    // Very useful if cleanup work is to be done before component is unmounted.

    useEffect(() => {
        console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        }
    });       // Very useful if some operation that should be cancelled whenever the component re-renders.

    let assignedClasses = [];
    let btnClass = '';

    if(props.showPersons) {
        btnClass = classes.Red;
    }

    if(props.personsLength <= 2) {
      assignedClasses.push(classes.red);
    }
    if(props.personsLength <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        </div>
    )
} 


export default React.memo(cockpit);