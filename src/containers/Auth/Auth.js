import React, { Component } from 'react';
import classes from './Auth.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

export default class Auth extends Component {

    loginHandler = () => {

    }

    registerHandler = () => {
        
    }

    submitHandler = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Authorization</h1>

                    <form
                        className={classes.AuthForm}
                        onSubmit={this.submitHandler}>

                        <Input
                            label="Email"
                        />
                        <Input
                            label="Password" />

                        <Button
                            onClick={this.loginHandler}
                            type="success">Sign In
                        </Button>

                        <Button
                            onClick={this.registerHandler}
                            type="primary">Sign Up
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}