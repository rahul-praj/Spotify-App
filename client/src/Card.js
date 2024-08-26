import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, InputGroup, FormControl, Button, Row, Card } from 'react-bootstrap'
import React, { useState, useEffect } from 'react';

export function SongCards() {


    const background = {
        background: 'linear-gradient(to right, rgb(29,185,84), rgb(179,179,179))',
        backgroundSize: 'cover'
    }

    return (
        <div>
            <Row className="mx-2 row row-cols-4">
                <Card style={{ height: '18rem' }} >
                    <Card.Img src="#" />
                    <Card.Body>
                        <Card.Title>Album Name</Card.Title>
                    </Card.Body>
                </Card>
            </Row>
        </div>
    )
}