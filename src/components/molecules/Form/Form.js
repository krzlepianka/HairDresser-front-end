import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button/index';
import Input from '../../atoms/Input/index';
import Label from '../../atoms/Label/index';

const StyledForm = styled.form`
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
        children,
        passedBtnName,
        errors,
        inputHandler,
        submitForm,
        successRegistrationInfo }) => {
    return (
        < FormWrapper >
            <StyledForm onSubmit={submitForm}>
                <Label>login</Label>
                <Input
                    type="text"
                    name="login"
                    onChange={inputHandler} />
                {errors["loginError"] && errors.loginError}
                < Label > password</Label>
                <Input
                    type="password"
                    name="password"
                    onChange={inputHandler} />
                {errors["passwordError"] && errors.passwordError}
                <Label>email</Label>
                <Input
                    name="email"
                    onChange={inputHandler} />
                {errors["emailError"] && errors.emailError}
                <Button>{passedBtnName}</Button>
                {successRegistrationInfo}
            </StyledForm>
        </FormWrapper >
    )
}

export default Form;