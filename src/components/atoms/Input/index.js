import styled, { css } from 'styled-components';

const Input = styled.input`
    background-color: #FFF;
    width: 40rem;
    height: 5rem;
    border: none;
    border-bottom: .1rem solid #000;
    outline: none;
    margin-bottom: 2rem;
    &:active,
    &:focus {
    text-align: left;
    font-size: 2rem;
    border-bottom: .2rem solid #000;
  }
`;

export default Input;