import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardBody, CardText, CardTitle, Container } from 'reactstrap';
import PersonnelCard from '../components/CardPersonnel';
import { getPersonnel } from '../redux/actions';
import styled, { css } from 'styled-components';

const Home = () => {
    const dispatch = useDispatch();
    const { personnel } = useSelector(state => {
        return {
            personnel: state.PersonnelReducer.personnel
        }
    })

    useEffect(() => {
        dispatch(getPersonnel())
    }, [])

    // Display 4 Personnel Card Function
    const [currentCard, setCurrentCard] = useState(1);
    const cardPerPage = 4;
    const maxPage = Math.ceil(personnel.length / cardPerPage);
    const indexLastCard = currentCard * cardPerPage;
    const indexFirstCard = indexLastCard - cardPerPage;
    const currentDisplayedCard = personnel.slice(indexFirstCard, indexLastCard);

    const renderCard = () => {
        return currentDisplayedCard.map((item, index) => {
            return <PersonnelCard key={index}>{item}</PersonnelCard>
        })
    }

    // styled-component
    const NavButton = styled.p`
    margin: 20px;
    display: inline-block;
    cursor: pointer;
    font-weight: 500;
    ${props =>
            props.disabled &&
            css`
        color: lightgrey;
        cursor: default;
        font-weight: normal;
    `}
    `


    return (
        <Container>
            <div className='d-md-flex'  style={{backgroundColor: '#f6f6f6', padding: 10 }}>
                {
                    currentDisplayedCard.length > 0 &&
                    renderCard()
                }
            </div>
            <div style={{ textAlign: 'center' }}>
                <NavButton
                    onClick={() => { currentCard !== 1 && setCurrentCard(currentCard - 1) }}
                    disabled={currentCard === 1 ? true : false}
                >
                    &larr; Previous
                </NavButton>
                <NavButton
                    onClick={() => { currentCard !== maxPage && setCurrentCard(currentCard + 1) }}
                    disabled={currentCard === maxPage ? true : false}
                >
                    Next Page &rarr;
                </NavButton>
            </div>
        </Container>
    )
}

export default Home;