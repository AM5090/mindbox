import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { TaskItem } from "../components/TaskItem";
import { TasksNumber } from "../components/TasksNumber";
import { ITaskItem } from "../store/rootAction";
import { RootState } from "../store/rootReducer";

export function AllTasks() {

    const tasks = useSelector<RootState, ITaskItem[]>(state => state.tasks);

    return (
        <>
            <Container>
                <h3 style={{textAlign: "left"}}>All tasks</h3>
                <TasksNumber length={tasks.length}/>
            </Container>
            <Container>
                <Row style={{ padding: '10px 10px' }}>
                    {[...tasks].reverse().map((task: ITaskItem) => (
                        <TaskItem key={task.id}
                            taskItem={task}
                        />
                    ))}
                </Row>
            </Container>
        </>
    );
}