import { Action, ActionCreator } from "redux";
import axios from 'axios';
import { ThunkAction } from "redux-thunk";
import { RootState } from "./rootReducer";

export type ITaskItem = {
    completed: boolean,
    id: number,
    title: string,
    userId: number,
}

export const TASKS = 'TASKS';
export type ITasksAction = {
    type: typeof TASKS,
    tasks: ITaskItem[]
}

export const tasksAction: ActionCreator<ITasksAction> = (tasks: ITaskItem[]) => ({
    type: TASKS,
    tasks
});

export const tasksAsyncRequest = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {

    axios.get('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10')
        .then((res) => {
            dispatch(tasksAction(res.data));
        })
        .catch((error) => {
            console.log(error);
        })

}

export const tasksPutAsyncRequest = (task: ITaskItem, checked: boolean): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {

    axios.put(`https://jsonplaceholder.typicode.com/todos/${task.id}`, {
            ...task,
            completed: checked,
        })
        .then((res) => {
            let oldTasks = getState().tasks;
            let newTasks = oldTasks.map((item) => {
                if(item.id === res.data.id) {
                    return res.data;
                }
                return item;
            });
            
            dispatch(tasksAction(newTasks));
        })
        .catch((error) => {
            console.log(error);
        });

}

export const tasksPostAsyncRequest = (newTaskText: string): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
        userId: 1,
        title: newTaskText,
        completed: false
    })
        .then((res) => {
            const oldTasks = getState().tasks;
            const tasksLength = oldTasks.length;
            const lastId = oldTasks[tasksLength-1].id;
            const newTasks = [...oldTasks, {...res.data, id: lastId + 1}];
            dispatch(tasksAction(newTasks));
        })
        .catch((error) => {
            console.log(error);
        })
}