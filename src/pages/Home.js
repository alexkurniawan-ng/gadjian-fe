import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Collapse, Container, Input, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, Row } from 'reactstrap';
import PersonnelCard from '../components/CardPersonnel';
import { getPersonnel } from '../redux/actions';
import styled, { css } from 'styled-components';
import logo from '../assets/img/logo.png';

const Home = () => {

    // call api
    const dispatch = useDispatch();
    const { personnel } = useSelector(state => {
        return {
            personnel: state.PersonnelReducer.personnel
        }
    })

    useEffect(() => {
        dispatch(getPersonnel())

        const x = window.matchMedia("(max-width: 700px)")
        const checkScreenSize = (e) => {
            setItemDisplay(false);
        };
        x.addListener(checkScreenSize)
        return () => x.removeListener(checkScreenSize);
    }, [])

    // state
    const [itemDisplay, setItemDisplay] = useState(true)
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);


    // styled-component
    const LinkSideBar = styled.a`
        text-decoration: none;
        color: black;
        margin-top: 50px;
        &:hover {
            text-decoration: none;
            color: #34c9c9;
        }
        ${props =>
            props.active &&
            css`
            color: #34c9c9;
            font-weight: bold;
    `}
    `;
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
        `;
    const ButtonPlus = styled.button`
        background-color: #34c9c9;
        border: none;
        color: white;
        padding: 10px 15px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        font-weight: bold;
        margin-right: 5px;
        margin-left: 5px;
        margin-bottom: 5px;
        `;
        const InputSearch = styled.input`
        padding: 8px 0px;
        border: 2px solid lightgrey;
        margin-right: 5px;
        margin-left: 5px;
        margin-bottom: 5px;
    `;
    const TitlePersonnel = styled.p`
        font-weight: bold; 
        font-size: 30px; 
        color: #34c9c9;
    `;
    const ListPersonnel = styled.p`
        font-size: 23px; 
        margin-top: -22px;
    `;


    // Display 4 Personnel Card Function
    const [currentCard, setCurrentCard] = useState(1);
    const cardPerPage = 4;
    const maxPage = Math.ceil(personnel.length / cardPerPage);
    const indexLastCard = currentCard * cardPerPage;
    const indexFirstCard = indexLastCard - cardPerPage;
    const currentDisplayedCard = personnel.slice(indexFirstCard, indexLastCard);

    const renderCard = () => {
        return currentDisplayedCard.map((item, index) => {
            return <PersonnelCard key={index} itemDisplay={itemDisplay}>{item}</PersonnelCard>
        })
    }


    return (
        <Container fluid>
            <Row>
                <Col md={2}>
                    <Navbar vertical light expand='md' style={{ flexDirection: 'column', marginTop: -30 }}>
                        <NavbarToggler onClick={toggle} />
                        <NavbarBrand><img src={logo} alt='logo' height='120' /></NavbarBrand>
                        <Collapse isOpen={isOpen} navbar vertical>
                            <Nav vertical>
                                <NavItem>
                                    <LinkSideBar href='/' > 🏠 Beranda</LinkSideBar>
                                </NavItem>
                                <NavItem style={{ marginTop: 25 }}>
                                    <LinkSideBar active href='/' >👨‍💼 Personnel List</LinkSideBar>
                                </NavItem>
                                <NavItem style={{ marginTop: 25 }}>
                                    <LinkSideBar href='/'>📅 Daily Attendance</LinkSideBar>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Col>

                <Col md={10}>
                    <div style={{ textAlign: 'right' }}>
                        {
                            personnel.length > 0 &&
                            <>
                                <p style={{ display: itemDisplay ? 'inline-block' : 'none' }}>Hallo, <span style={{ color: '#34c9c9' }}>{personnel[0].name.first} {personnel[0].name.last}</span></p>
                                <img src={personnel[0].picture.medium} height={50} style={{ borderRadius: '50%', margin: 20 }} />
                            </>
                        }
                    </div>
                    <div style={{ backgroundColor: '#f6f6f6', padding: 15 }}>
                        <div className='d-md-flex' style={{ backgroundColor: 'white', margin: 15, borderRadius: 5, padding: 20 }}>
                            <div style={{ flex: 1 }} >
                                <TitlePersonnel>PERSONNEL LIST</TitlePersonnel>
                                <ListPersonnel>List of all personnels</ListPersonnel>
                            </div>
                            <div style={{ flex: 1, textAlign: itemDisplay? 'right' : 'center', marginTop: 15 }} >
                                <InputSearch type='text' width={itemDisplay ? '18%' : '100%'} placeholder='🔍 Find Personnels' />
                                <ButtonPlus width={itemDisplay ? '20%' : '100%'}>ADD PERSONNEL ➕</ButtonPlus>
                            </div>
                        </div>
                        <div className='d-md-flex'>
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
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;