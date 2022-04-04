import React from 'react';
import { Button, Form, Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './top.css'

export class Top extends React.Component {
    constructor(props) {
        super(props)
        this.handlerChange = this.handlerChange.bind(this);
        this.handlerAdd = this.handlerAdd.bind(this);
        this.state = { isvalid: false };
    }

    handlerChange(e) {
        this.props.handlerChange(e);
    }
    handlerAdd(e) {
        if (!this.props.name) {
            this.setState({ isvalid: true });
        } else {
            this.props.handlerAdd(e);
        }
    }

    render() {
        return (
            <div>
                <Form validated={this.state.isvalid} onSubmit={this.handlerAdd}>
                    <Stack direction="horizontal" gap={3}>
                        <Form.Control required name='name' className="me-auto new-name" placeholder="タスク名" value={this.props.name} onChange={this.handlerChange} />
                        <Form.Control name='from' type='date' className="me-auto" placeholder="開始日" value={this.props.from} onChange={this.handlerChange} />
                        <Form.Control name='to' type='date' className="me-auto" placeholder="終了日" value={this.props.to} onChange={this.handlerChange} />
                        <Button variant="secondary" onClick={this.handlerAdd}>Add</Button>
                    </Stack>
                </Form>
            </div>
        )
    }
}
