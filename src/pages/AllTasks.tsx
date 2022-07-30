import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { TaskItem } from "../components/TaskItem";
import { ITaskItem } from "../store/rootAction";
import { RootState } from "../store/rootReducer";

export function AllTasks() {

    const tasks = useSelector<RootState, ITaskItem[]>(state => state.tasks);
    console.log('sss', tasks);

    return (
        <>
            <h3>All tasks</h3>
            <Container>
                <Row style={{ padding: '20px' }}>
                    {tasks.map((task: ITaskItem) => (
                        <TaskItem key={task.id}
                            taskItem={task}
                        />
                    ))}
                </Row>
            </Container>
        </>
    );
}