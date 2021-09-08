import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import TodosList from './components/TodosList';
import { useState } from 'react'
const App = () => {
  const [Input, setInput] = useState("");
  const [Todos, setTodos] = useState([]); 

  return (
    <div className="conntainer">
      <div className="app-wrapper">
        <Header />
        <div>
          <Form
            Input={Input}
            setInput={setInput}
            Todos={Todos}
            setTodos={setTodos}
          />
        </div>
        <div>
          <TodosList
            Todos={Todos}
            setTodos={setTodos}        
          />
        </div>
      </div>
    </div>
  );
}

export default App;
