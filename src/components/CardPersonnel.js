import React from 'react';
import { Card, CardBody, CardText, CardTitle, DropdownItem } from 'reactstrap';
import styled, { css } from 'styled-components';



const PersonnelCard = ({ children }) => {

    const Image = styled.img`
    border-radius: 50%;
    margin-top: 25px;
    margin-bottom: 25px;
    `;

    const Title = styled.p`
    font-size: 14px;
    font-weight: 500;
    `;

    const Text = styled.p`
    font-size: 16px;
    margin-top: -13px;
    `;

    return (
        <Card style={{ flex: 1, margin: 10, color: 'grey', fontSize: 16, borderRadius: 10, borderColor: '#f6f6f6' }}>
            <CardBody style={{ marginTop: -15 }}>
                <CardTitle>Personnel ID: <span style={{ color: '#79dcdb', fontWeight: '500' }}>{children.id.value}</span></CardTitle>
                <DropdownItem divider style={{ marginTop: -10 }} />
                <div style={{textAlign: 'center'}}>
F                <Image src={children.picture.medium} alt='avatar' height='120' />
                </div>
                <Title>Name</Title>
                <Text>{children.name.first} {children.name.last}</Text>
                <Title>Telephone</Title>
                <Text>{children.phone}</Text>
                <Title>Birthday</Title>
                <Text>{children.dob.date}</Text>
                <Title>Email</Title>
                <Text>{children.email}</Text>
            </CardBody>
        </Card>
    )
}

export default PersonnelCard;