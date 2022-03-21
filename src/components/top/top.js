import React from 'react';
import { Button, Form, Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Top extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Stack direction="horizontal" gap={3}>
                    <Form.Control className="me-auto" placeholder="Add your item here..." />
                    <Button variant="secondary">Submit</Button>
                    <div className="vr" />
                    <Button variant="outline-danger">Reset</Button>
                </Stack>
            </div>
        )
    }
}
