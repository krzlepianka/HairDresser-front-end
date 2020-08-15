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
    font-size: ${({ theme }) => theme.mFontSize};
    outline: none;
    cursor: pointer;
    ${({ small }) => (
        small && css`
        font-size: ${({ theme }) => theme.mFontSize};
        height: 5rem;
        width: 15rem;
        margin: 2rem 0rem 0rem 1rem;
        `
    )}

`;

export default Button;