import React from 'react';
import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph';
import Button from '../../atoms/Button';

const CardWrapper = styled.div`
    background-image: linear-gradient(180deg, #F6D9F7 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #C791CC 0%, rgba(241, 231, 242, 0.932292) 99.99%, rgba(255, 255, 255, 0) 100%);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 16px;
    margin: 4px;
    flex: 0 1 calc(20% - 8px);
`

const Card = ({ imię, nazwisko, email, tel }) => {
    return (
        <>
            <CardWrapper>
                <Paragraph>imię: {imię}</Paragraph>
                <Paragraph>nazwisko: {nazwisko}</Paragraph>
                <Paragraph>email: {email}</Paragraph>
                <Paragraph>tel: {tel}</Paragraph>
                <Button small>Szczegóły</Button>
                <Button small>Usuń</Button>
            </CardWrapper>
        </>
    )
}

export default Card;