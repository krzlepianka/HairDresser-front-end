import styled from 'styled-components';

const Paragraph = styled.h2`
    text-transform: uppercase;
    font-family: 'Open Sans';
    font-size: ${({ theme }) => theme.mFontSize};
    padding: 2rem 0rem 0rem 1rem;
`;

export default Paragraph;