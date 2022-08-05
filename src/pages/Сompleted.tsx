import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { TaskItem } from "../components/TaskItem";
import { TasksNumber } from "../components/TasksNumber";
import { ITaskItem } from "../store/rootAction";
import { RootState } from "../store/rootReducer";

export function Completed() {

    const allTasks = useSelector<RootState, ITaskItem[]>(state => state.tasks);
    const completedTasks = allTasks.filter(task => task.completed === true);

    return (
        <>
            <Container>
                <h3 style={{textAlign: "left"}}>Completed</h3>
                <TasksNumber length={completedTasks.length}/>
            </Container>
            <Container>
                <Row style={{ padding: '20px 10px' }}>
                    {[...completedTasks].reverse().map((task: ITaskItem) => (
                        <TaskItem key={task.id}
                            taskItem={task}
                        />
                    ))}
                </Row>
            </Container>
        </>
    );
}