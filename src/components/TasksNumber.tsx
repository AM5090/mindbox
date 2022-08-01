import { Row, Col } from "react-bootstrap";

interface TasksNumberProps {
    length: number
}

export function TasksNumber({ length }: TasksNumberProps) {
    return (
        <Row>
            <Col style={{textAlign: "left"}} xs={1}>
                <span className="me-2">{length}</span>
                <span>tasks</span>
            </Col>
        </Row>
    );
}