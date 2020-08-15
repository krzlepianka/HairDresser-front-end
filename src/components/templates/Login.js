import React, { useState } from 'react';
import Form from '../molecules/Form/Form';
import axios from 'axios';
import postData from '../helpers/axios-requests';

const Login = ({ children, history }) => {

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

    const inputHandler = e => {
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
            const { login, password, email } = userData;
            const API_URL = 'http://localhost:5000/api/authentication/signin';
            postData(API_URL, { login, password, email })
                .then(response => {
                    localStorage.setItem('TOKEN', response.data.token);
                    history.push('/Dashboard');
                })
                .catch(error => console.log(error.response.data.message));
        }
        setErrors({
            ...errors,
            loginError: validateForm().validLogin.loginError,
            passwordError: validateForm().validPassword.passwordError,
            emailError: validateForm().validEmail.emailError
        })
    }
    return (
        <>
            <Form
                inputHandler={inputHandler}
                submitForm={submitForm}
                errors={errors}
                passedBtnName={"zaloguj"}
            />
        </>
    );
}


export default Login;