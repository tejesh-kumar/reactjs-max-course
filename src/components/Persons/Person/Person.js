import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClass'
import AuthContext from '../../../context/auth-context';

import classes from './Person.css'

// const person = (props) => {
class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;
    // 2nd method: This allows React to connect this class-based component to the context object behind the scenes.

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Person.js] rendering...');

        return (
            <Aux>
                { this.context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}

            {/* // <div className={classes.Person}> */}
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text"
                //  ref={(inputEl) => {this.inputElement = inputEl}} 
                 ref={this.inputElementRef}
                 onChange={this.props.changed} 
                 value={this.props.name} />
            {/* // </div> */}
            </Aux>
        )
    }

}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

// export default person;
export default withClass(Person, classes.Person)




