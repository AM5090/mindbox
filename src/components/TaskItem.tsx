import { Form, Button, Card, Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { ITaskItem, tasksAsyncRequest, tasksPutAsyncRequest } from "../store/rootAction";
import axios from 'axios';
import { useDispatch } from "react-redux";

interface ITaskItemProps {
    taskItem: ITaskItem;
}

export function TaskItem({taskItem}: ITaskItemProps) {

    const [checked, setChecked] = useState(taskItem.completed);
    const dispatch = useDispatch();



    function handleChecked() {
        setChecked(!checked);
        
        dispatch(tasksPutAsyncRequest(taskItem, !checked));
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
                    <Card.Text style={{textAlign: "left"}}
                    >
                    {!checked ? 
                        <span>{taskItem.title}</span> : 
                        <span className="text-secondary"><del>{taskItem.title}</del></span>
                    }
                    </Card.Text>
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