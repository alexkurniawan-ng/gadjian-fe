import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardText, CardTitle, DropdownItem } from 'reactstrap';
import styled, { css } from 'styled-components';
import Moment from 'moment';


const PersonnelCard = ({ children }) => {
    const [itemDisplay, setItemDisplay] = useState(true)

    useEffect(() => {
        const x = window.matchMedia("(max-width: 700px)")
        const checkScreenSize = (e) => {
            setItemDisplay(false);
        };
        x.addListener(checkScreenSize)
        return () => x.removeListener(checkScreenSize);
    }, [])



    const Image = styled.img`
    border-radius: 50%;
    margin-top: 5px;
    margin-bottom: 5px;
    `;

    const Title = styled.p`
    font-size: 14px;
    font-weight: bold;
    `;

    const Text = styled.p`
    font-size: 18px;
    margin-top: -18px;
    `;

    return (
        <Card style={{ flex: 1, margin: 15, color: 'grey', fontSize: 16, borderRadius: 10, borderColor: '#f6f6f6' }}>
            <CardBody style={{ marginTop: -15 }}>
                <CardTitle>Personnel ID: <span style={{ color: '#34c9c9', fontWeight: '500' }}>{children.id.value}</span></CardTitle>
                <DropdownItem divider style={{ marginTop: -10, marginLeft: -20, marginRight: -20 }} />
                <div style={{display: itemDisplay ? 'block' : 'flex'}}>
                    <div style={{ textAlign: 'center', flex: itemDisplay ? 'none' : 1 }}>
                        <Image src={children.picture.large} alt='avatar' height='160' />
                    </div>
                    <div style={{ flex: itemDisplay ? 'none' : 1 }}>
                        <Title style={{marginTop: 25}}>Name</Title>
                        <Text>{children.name.first} {children.name.last}</Text>
                        <Title>Telephone</Title>
                        <Text>{children.phone}</Text>
                        <Title style={{ display: itemDisplay ? 'block' : 'none' }}>Birthday</Title>
                        <Text style={{ display: itemDisplay ? 'block' : 'none' }}>{Moment(children.dob.date).format("MMMM Do")}</Text>
                        <Title style={{ display: itemDisplay ? 'block' : 'none' }}>Email</Title>
                        <Text style={{ display: itemDisplay ? 'block' : 'none' }}>{children.email}</Text>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

export default PersonnelCard;