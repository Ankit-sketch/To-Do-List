import React from 'react'

import { MdDelete, MdDoneAll } from 'react-icons/md';

import { FaEdit } from 'react-icons/fa';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const TodosList = ({ Todos, setTodos, edit, setedit }) => {
    const handleDelete = ({ id }) => {
        setTodos(Todos.filter(val => val.id !== id
        ))
        toast.success('🦄 Deleted Successfully', {
            position: "top-center", autoClose: 1000, hideProgressBar: true,
        })
    }

    const handleComplete = (todo) => {
        setTodos(Todos.map(item => {
            if (item.id === todo.id) {
                return { ...item, completed: !item.completed }
            }
            return item;
        }
        ))
        toast.success('🦄 Completed', {
            position: "top-center", autoClose: 1000, hideProgressBar: false,
        })
    }

    return (
        <div>
            {
                Todos.map(todo =>
                    <li className="list-item" key={todo.id}>
                        <input type="text" className="list-input" value={todo.title} onChange={(event) => {
                            event.preventDefault();
                        }} />
                        <div className="list-div">
                            <button className="task-complete" onClick={() => handleComplete(todo)}>
                                <MdDoneAll />
                            </button>
                            <button className="task-delete" onClick={() => handleDelete(todo)}>
                                <MdDelete />
                            </button>
                        </div>
                    </li>
                )
            }
            <ToastContainer />
        </div>
    )
}

export default TodosList
