import React, { useState } from 'react';
import Form from '../molecules/Form/Form';

const Register = () => {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({
        loginError: '',
        passwordError: '',
        emailError: ''
    });

    const validateLogin = () => {
        if(!login) {
            setErrors({...errors, loginErorr:'podaj login'})
            return false;
        }
        else if(login.length < 7) {
            setErrors({...errors, loginErorr: 'login jest za krótki'})
            return false;
        }
        else {
            return true;
        }
    };

    const validateFormHandler = e => {
        e.preventDefault();
        const test = validateLogin();
        if(test) {
            console.log('yeaa')
        }
        else {
            console.log('noaaa')
        }
    }

    return (
        <>
            <Form
                passedBtnName={"zarejestruj"}
                login={login}
                password={password}
                email={email}
                setLogin={setLogin}
                setPassword={setPassword}
                setEmail={setEmail}
                validateFormHandler={validateFormHandler}
                errors={errors}
            />
        </>
    );
}


export default Register;