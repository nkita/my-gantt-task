import React from 'react';
import { Button, Form, Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Top extends React.Component {
    constructor(props) {
        super(props)
        this.addTask = props.addTask;
        this.changeTask = this.changeTask.bind(this);
        this.state = {
            taskname: ''
        }
    }

    changeTask(e) {
        console.log(e.target.value);
        this.setState({ taskname: e.target.value });
    }

    render() {
        return (
            <div>
                <Stack direction="horizontal" gap={3}>
                    <Form.Control className="me-auto" placeholder="Add your item here..." value={this.state.taskname} onChange={this.changeTask} />
                    <Button variant="secondary" onClick={this.addTask}>Submit</Button>
                    <div className="vr" />
                    <Button variant="outline-danger">Reset</Button>
                </Stack>
            </div>
        )
    }
}
