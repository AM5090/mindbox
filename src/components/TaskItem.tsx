import { Button, Card } from "react-bootstrap";
import { Form } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from "react";
import { ITaskItem } from "../store/rootAction";

interface ITaskItemProps {
    taskItem: ITaskItem;
}

export function TaskItem({taskItem}: ITaskItemProps) {

    const [checked, setChecked] = useState(taskItem.completed);

    function handleChecked() {
        setChecked(!checked);
    }

    return (
        <Card style={{
            backgroundColor: '#282c34',
            boxShadow: '0px 2px 20px 2px #3c475c',
            padding: '10px',
            marginBottom: '10px'
        }}>
            <Row>
                <Col xs={2}>
                    <Form.Check type="switch" isValid checked={checked} onChange={handleChecked} />
                </Col>
                <Col>
                    <Card.Text style={{textAlign: "left"}}>{taskItem.title}</Card.Text>
                </Col>
                <Col xs={2}>
                    <Button variant="outline-danger" size="sm">
                        <i className="bi bi-trash3"></i>
                    </Button>
                </Col>
            </Row>
        </Card>
    );
}