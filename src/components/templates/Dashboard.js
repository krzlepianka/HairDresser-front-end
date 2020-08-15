import React from 'react';
import styled from 'styled-components';
import SearchBar from '../molecules/SearchBar/SearchBar';
import Cards from '../molecules/Cards/Cards';

const CardsWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-grow: 1;
`

const Dashboard = () => {
    return (
        <>
            <SearchBar />
            <CardsWrapper>
                <Cards />
            </CardsWrapper>
        </>
    );
}

export default Dashboard;