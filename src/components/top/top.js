import React from 'react';
import { Button, Form, Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Top extends React.Component {
    constructor(props) {
        super(props)
        this.addTask = props.addTask;
        this.handlerChange = this.handlerChange.bind(this);
    }

    handlerChange(e) {
        this.props.handlerChange(e);
    }


    render() {
        return (
            <div>
                <Stack direction="horizontal" gap={3}>
                    <Form.Control name='name' className="me-auto" placeholder="タスク名" value={this.props.name} onChange={this.handlerChange} />
                    <Form.Control name='from' type='date' className="me-auto" placeholder="開始日" value={this.props.from} onChange={this.handlerChange} />
                    <Form.Control name='to' type='date' className="me-auto" placeholder="終了日" value={this.props.to} onChange={this.handlerChange} />
                    <Button variant="secondary" onClick={this.addTask}>Add</Button>
                </Stack>
            </div>
        )
    }
}
