import React from 'react';
import styled from 'styled-components';
import Card from '../Card/Card';

const CardsWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const ClientsMock = [
    {
        id: '1',
        imię: 'Ania',
        nazwisko: 'Różycka',
        email: 'lalal@gmail.com',
        tel: '412423454235'
    },
    {
        id: '2',
        imię: 'Ania2',
        nazwisko: 'Różycka2',
        email: 'lalal@gmail.com2',
        tel: '4124234542352'
    },
    {
        id: '3',
        imię: 'Ania3',
        nazwisko: 'Różycka3',
        email: 'lalal@gmail.com3',
        tel: '4124234542353'
    },
    {
        id: '4',
        imię: 'Ania4',
        nazwisko: 'Różycka4',
        email: 'lalal@gmail.com4',
        tel: '4124234542354'
    },
    {
        id: '5',
        imię: 'Ania5',
        nazwisko: 'Różycka5',
        email: 'lalal@gmail.com5',
        tel: '4124234542355'
    },
    {
        id: '6',
        imię: 'Ania6',
        nazwisko: 'Różycka6',
        email: 'lalal@gmail.com6',
        tel: '4124234542355'
    },
    {
        id: '7',
        imię: 'Ania6',
        nazwisko: 'Różycka6',
        email: 'lalal@gmail.com6',
        tel: '4124234542355'
    },
    {
        id: '8',
        imię: 'Ania6',
        nazwisko: 'Różycka6',
        email: 'lalal@gmail.com6',
        tel: '4124234542355'
    }
];


const Cards = () => ClientsMock.map(client => {
    const { id, imię, nazwisko, email, tel } = client;
    return <Card
        key={id}
        imię={imię}
        nazwisko={nazwisko}
        email={email}
        tel={tel}
    />
});

export default Cards;