import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button/index';
import Input from '../../atoms/Input/index';
import Label from '../../atoms/Label/index';

const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60rem;
    width: 50rem;
    background: #FFF;
`

const FormWrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    background-image: linear-gradient(to right, #F2E0F2, #C391C1, #C594C3);
    justify-content: center;
    align-items: center;
`

const Form = (
    {
        passedBtnName,
        errors,
        validateFormHandler,
        handleInput }) => {
    return (
        < FormWrapper >
            <StyledForm>
                <Label>login</Label>
                <Input
                    type="text"
                    name="login"
                    onChange={handleInput} />
                {errors["loginError"] && errors.loginError}
                < Label > password</Label>
                <Input
                    type="password"
                    name="password"
                    onChange={handleInput} />
                {errors["passwordError"] && errors.passwordError}
                <Label>email</Label>
                <Input
                    type="email"
                    name="email"
                    onChange={handleInput} />
                {errors["emailError"] && errors.emailError}
                <Button
                    onClick={validateFormHandler}
                >{passedBtnName}</Button>
            </StyledForm>
        </FormWrapper >
    )
}

export default Form;