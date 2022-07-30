import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Active } from '../pages/Active';
import { AllTasks } from '../pages/AllTasks';
import { Completed } from '../pages/Сompleted';
import { tasksAsyncRequest } from '../store/rootAction';

export function Content() {

    const dispatch = useDispatch();

    dispatch(tasksAsyncRequest());

    return (
        <div className='App-content'>
            <Routes>
                <Route path='/' element={<AllTasks/>} />
                <Route path='/active' element={<Active/>} />
                <Route path='/completed' element={<Completed/>} />
            </Routes>
        </div>
    );
}