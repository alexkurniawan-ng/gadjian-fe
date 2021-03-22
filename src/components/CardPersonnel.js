import React from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';

const PersonnelCard = ({ children }) => {

    return (
        <Card style={{ flex: 1 }}>
            <CardBody>
                <CardTitle>Personnel ID: {children.id.value}</CardTitle>
                <img src={children.picture.medium} />
                <CardTitle tag='h6'>Name</CardTitle>
                <CardText>{children.name.first} {children.name.last}</CardText>
                <CardTitle tag='h6'>Telephone</CardTitle>
                <CardText>{children.phone}</CardText>
                <CardTitle tag='h6'>Birthday</CardTitle>
                <CardText>{children.dob.date}</CardText>
                <CardTitle tag='h6'>Email</CardTitle>
                <CardText>{children.email}</CardText>
            </CardBody>
        </Card>
    )
}

export default PersonnelCard;