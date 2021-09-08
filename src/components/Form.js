import { v4 as uuidv4 } from 'uuid';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Form = ({ Input, setInput, Todos, setTodos }) => {
    const onInputChange = (event) => {
        setInput(event.target.value);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        setTodos([...Todos, { id: uuidv4(), title: Input, completed: false }]);
        toast.success('🦄 Added Successfully', {
            position: "top-center", autoClose: 1000, hideProgressBar: true,
        })
        setInput("")
    }

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <input type="text" placeholder="Enter a Todo..." className="task-input" value={Input} required onChange={onInputChange} />
                <button className="button-add" type="submit">Add</button>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Form;
