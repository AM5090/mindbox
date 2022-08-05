import { ChangeEvent, FormEvent, SetStateAction, useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { tasksPostAsyncRequest } from "../store/rootAction";

interface TasksNumberProps {
    length: number
}

export function TasksNumber({ length }: TasksNumberProps) {

    const [value, setValue] = useState('');
    const [errorValue, setErrorValue] = useState('');
    const dispatch = useDispatch();

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setErrorValue(validateValue());
        const validateResult = validateValue();
        if (!!validateResult) return;
        
        dispatch(tasksPostAsyncRequest(value));

        setValue('');
    }

    function validateValue() {
        if (value.length < 3 || value.length > 50) {
            return 'Введите от 3-х до 50-и символов!'
        }
        return '';
    }

    return (
        <Row className="justify-content-between pb-4">
            <Col style={{textAlign: "left"}} xs={1}>
                <span className="me-2">{length}</span>
                <span>tasks</span>
            </Col>
            <Col xs={7}>
                <Form onSubmit={handleSubmit}>
                    <Row className="justify-content-end">
                        <Col className="position-relative p-0" xs={9}>
                            <Form.Control value={value} 
                                onChange={handleChange} 
                                size="sm" 
                                placeholder="add new task"
                            />
                            {errorValue && <Form.Text className="position-absolute start-0">
                                {errorValue}
                            </Form.Text>}
                        </Col>
                        <Col xs={2}>
                            <Button className="px-4" 
                                size="sm" 
                                variant="success" 
                                type="submit"
                            >add</Button>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    );
}