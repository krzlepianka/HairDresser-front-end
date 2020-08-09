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
        login,
        password,
        email,
        setLogin,
        setPassword,
        setEmail,
        validateFormHandler }) => {
    return(
        <FormWrapper>
            <StyledForm>
                <Label>login</Label>
                <Input 
                    type="text"
                    onChange={e => setLogin(e.target.value)}/>
                <Label>password</Label>
                <Input 
                    type="password" 
                    onChange={e => setPassword(e.target.value)}/>
                <Label>email</Label>
                <Input 
                    type="email"
                    onChange={e => setEmail(e.target.value)}/>
                <Button
                    onClick={e => validateFormHandler(e)}    
                >{passedBtnName}</Button>
            </StyledForm>
        </FormWrapper>
    )
}

export default Form;