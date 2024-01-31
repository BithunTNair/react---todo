import React, { useState } from 'react'
import './TodoReact.css'

function TodoReact() {
    const [task, setTask] = useState([]);
    const [input, setInput] = useState("");
    const addTask = () => {
        if (input.length === 0) {
            return;
        }
        setTask([...task, {
            value: input,
            complete: false,
            edit: false
        }]);
        setInput('');
    }
    const deleteTask = (index) => {
        task.splice(index, 1)
        setTask([
            ...task
        ]
        )
    }
    const taskCompleted = (index) => {
        task[index].complete = !task[index].complete;
        setTask([
            ...task
        ]
        )
    }
    const editTask = (index) => {
        task[index].edit = true;
        setTask(
            [...task]
        )
    }
    const valueUpdating = (index, value) => {
        task[index].value = value;
        setTask(
            [...task]
        )
    }
    const saveTask = (index) => {
        task[index].edit = false;
        setTask(
            [...task]
        )
    }
    return (
        <div className='todo-list'>
            <h1>Task Manager</h1>
            <div className='todo'>
                {
                    task.sort((x) => x.complete ? 1 : -1).map(
                        (tasks, i) => {
                            return <div key={i} className={'values ' + (tasks.complete ? 'completed' : 'incompleted')}>
                                <input type="checkbox" checked={tasks.complete} onChange={() => taskCompleted(i)} />
                                {
                                    tasks.edit ?
                                        <input type="text" value={tasks.value} onChange={(e) => valueUpdating(i, e.target.value)} className='edit-inp' />
                                        :
                                        <span className='value'>
                                            {
                                                tasks.complete ?
                                                    <del> {tasks.value} </del> :
                                                    tasks.value
                                            }
                                        </span>
                                }
                                {tasks.edit ?
                                    <button onClick={() => saveTask(i)} className='save'>Save</button> :
                                    <button onClick={() => editTask(i)} className='edit'>Edit</button>
                                }
                                <button onClick={() => deleteTask(i)} className='delete'>Delete</button>
                            </div>
                        }
                    )
                }
            </div>
            <div className='container'>
                <input value={input} type="text" onChange={(e) => setInput(e.target.value)} className='submit-inp' placeholder='Enter here' />
                <button onClick={addTask}>Add</button>
            </div>
        </div>
    )
}

export default TodoReact