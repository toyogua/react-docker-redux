import React, { useState } from 'react';
import {connect} from "react-redux";
import { Form, Button, Container } from 'react-bootstrap';
import { initiateGetResult} from '../api/sendData'
const FormData = (props) => {
    const handleSend = (event) => {
        event.preventDefault();
        const text = event.target[0].value
        props.dispatch(initiateGetResult(text))
        event.target[0].value = ''
    };
    return (
        <Container>
            <Form onSubmit={handleSend}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Enter text send to Node Api</Form.Label>
                    <Form.Control type="text" placeholder="Type data" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Send
                </Button>
            </Form>
        </Container>
    );
}

const mapStateToProps = ( state) => {
    const{ list } = state
return {
    responses: list
}
}
export default connect(mapStateToProps)(FormData);
