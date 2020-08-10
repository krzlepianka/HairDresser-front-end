import React, { useState, useEffect, useRef } from 'react';
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
            [name]: value
        })
    }

    const validateLoginHandler = () => {
        let loginError = "";
        let valid = false;
        if (!userData.login || userData.login === null) {
            loginError = "podaj login"
            valid = false;

        }
        else if (userData.login.length < 7) {
            loginError = "login jest za krótki"
            valid = false;
        }
        else {
            loginError = "";
            valid = true;
        }
        return { loginError, valid }
    };

    const validatePasswordHandler = () => {
        let passwordError = "";
        let valid = false;
        if (!userData.password || userData.password === null) {
            passwordError = "podaj hasło"
            valid = false;

        }
        else if (userData.password.length < 7) {
            passwordError = "hasło jest za krótkie"
            valid = false;
        }
        else {
            passwordError = "";
            valid = true;
        }
        return { passwordError, valid }
    };

    const validateEmailHandler = () => {
        let emailError = "";
        let valid = false;
        const regex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
        if (!userData.email || userData.email === null) {
            emailError = "podaj maila";
            valid = false;
        }
        else if (!regex.test(userData.email)) {
            emailError = "podaj prawidłowy adres mailowy";
            valid = false;
        }
        else {
            emailError = "";
            valid = true;
        }
        return { emailError, valid }
    };


    const validateForm = () => {
        const validLogin = validateLoginHandler();
        const validPassword = validatePasswordHandler();
        const validEmail = validateEmailHandler();
        return {
            validLogin,
            validPassword,
            validEmail
        }
    }

    const submitForm = e => {
        e.preventDefault();
        if (validateForm().validEmail.valid && validateForm().validLogin.valid && validateForm().validPassword.valid) {
            console.log('strzał do APi logowanie')
            setErrors({
                ...errors,
                loginError: validateForm().validLogin.loginError,
                passwordError: validateForm().validPassword.passwordError,
                emailError: validateForm().validEmail.emailError
            })
        }
        else {
            setErrors({
                ...errors,
                loginError: validateForm().validLogin.loginError,
                passwordError: validateForm().validPassword.passwordError,
                emailError: validateForm().validEmail.emailError
            })
        }
    }

    return (
        <>
            <Form
                passedBtnName={"zarejestruj"}
                handleInput={handleInput}
                submitForm={submitForm}
                errors={errors}
            />
        </>
    );
}


export default Register;