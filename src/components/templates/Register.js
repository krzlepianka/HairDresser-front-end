import React, { useState } from 'react';
import Form from '../molecules/Form/Form';

const Register = () => {

    const [userData, setUserData] = useState({
        login: '',
        password: '',
        email: ''
    });
    const [errors, setErrors] = useState({
        loginError: null,
        passwordError: null,
        emailError: null
    });


    const handleInput = e => {
        const { value, name } = e.target;
        setUserData({
            ...userData,
            [name]: [value]
        })
    }

    const validateLoginHandler = () => {
        let loginError = "";
        if (!userData.login || userData.login === null) {
            loginError = "podaj login"
        }
        else if (userData.login.length < 7) {
            loginError = "login jest za krótki"
        }
        setErrors(currentState => ({
            ...currentState,
            loginError: loginError
        }));
    };

    const validatePasswordHandler = () => {
        let passwordError = "";
        if (!userData.password) {
            passwordError = "podaj hasło"

        }
        else if (userData.password.length < 7) {
            passwordError = "hasło jest za krótkie"
        }
        setErrors(currentState => ({
            ...currentState,
            passwordError: passwordError
        }))
    };

    const validateEmailHandler = () => {
        let emailError = "";
        const regex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
        if (!userData.email) {
            emailError = "podaj maila"
        }
        else if (!regex.test(userData.email)) {
            emailError = "podaj prawidłowy adres mailowy"
        }
        setErrors(currentState => ({
            ...currentState,
            emailError: emailError
        }))
    };


    const validateFormHandler = e => {
        e.preventDefault();
        const validateLogin = validateLoginHandler();
        const validatePassword = validatePasswordHandler();
        const validateEmail = validateEmailHandler();
        const { loginError, passwordError, emailError } = errors;
        //console.log((loginError.length === 0 && passwordError.length === 0 && emailError.length === 0) ? 'rejestracja udana' : 'rejestracja nie udana');
        console.log(userData.login[0].length)
        if (errors.loginError === null || errors.loginError.length > 0) {
            console.log('rejestracja nieudana');
        }
        else {
            console.log('rejestracja udana')
        }
    }

    return (
        <>
            <Form
                passedBtnName={"zarejestruj"}
                //login={login}
                //password={password}
                //email={email}
                //setLogin={setLogin}
                //setPassword={setPassword}
                //setEmail={setEmail}
                validateFormHandler={validateFormHandler}
                handleInput={handleInput}
                errors={errors}
            />
        </>
    );
}


export default Register;