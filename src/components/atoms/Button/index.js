import styled, { css } from 'styled-components';

const Button = styled.button`
    background-color: #9E67C0;
    color: #FFF;
    height: 5rem;
    width: 20rem;
    border-radius: 5rem;
    border: none;
    text-transform: uppercase;
    font-family: 'Open Sans';
    font-size: ${({theme}) => theme.mFontSize};
    outline: none;
    cursor: pointer;
    ${({ secondary }) => (
        secondary && css`
        background-color: yellow;
        color: #000
        `
    )}

`;

export default Button;