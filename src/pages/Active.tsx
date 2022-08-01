import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { TaskItem } from "../components/TaskItem";
import { TasksNumber } from "../components/TasksNumber";
import { ITaskItem } from "../store/rootAction";
import { RootState } from "../store/rootReducer";

export function Active() {

    const allTasks = useSelector<RootState, ITaskItem[]>(state => state.tasks);
    const activeTasks = allTasks.filter(task => task.completed === false);

    return (
        <>
            <Container>
                <h3 style={{textAlign: "left"}}>Active</h3>
                <TasksNumber length={activeTasks.length}/>
            </Container>
            <Container>
                <Row style={{ padding: '20px 10px' }}>
                    {activeTasks.map((task: ITaskItem) => (
                        <TaskItem key={task.id}
                            taskItem={task}
                        />
                    ))}
                </Row>
            </Container>
        </>
    );
}