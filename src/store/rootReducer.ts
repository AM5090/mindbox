import { Action, Reducer } from "redux"
import { ITasksAction, ITaskItem, TASKS } from "./rootAction";

export interface RootState {
    tasks: ITaskItem[]
}

const initialState: RootState = {
    tasks: []
}

export const rootReducer: Reducer<RootState, ITasksAction> = (state = initialState, action) => {
    switch(action.type) {
        case TASKS:
            return {
                ...state,
                tasks: action.tasks
            }
        default:
            return state;
    }
}