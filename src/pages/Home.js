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
    `


    return (
        <Container>
            <div className='d-flex'>
                {
                    currentDisplayedCard.length > 0 &&
                    renderCard()
                }
            </div>
            <div style={{ textAlign: 'center' }}>
                <NavButton
                    onClick={() => { setCurrentCard(currentCard - 1) }}
                // style={{ marginRight: 20, display: 'inline-block', cursor: 'pointer' }}
                >
                    Previous Page
                </NavButton>
                <NavButton
                    onClick={() => { setCurrentCard(currentCard + 1) }}
                    style={{ marginLeft: 10, display: 'inline-block', cursor: 'pointer' }}

                >
                    Next Page
                </NavButton>
            </div>
        </Container>
    )
}

export default Home;