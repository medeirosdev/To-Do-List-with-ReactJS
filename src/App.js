//Importando Componentes
  import FormComponent from './components/FormComponent';

// Styles Import
  import './App.css';
  import {BsTrash, BsBookmarkCheck, bsBookmarkCheckFill} from "react-icons/bs"
//Imports de Use..
  import { useState , useEffect} from 'react';

//Local para rostear
  const API = 'http://localhost:5000'



function App() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false)


  return (
    <div className="App">
      <div className="todo-header">
        <h1>Nokia React To Do List</h1>
      </div>
      <div className="form-todo">
        <h2>Insira sua Próxima Tarefa</h2>
        <p>Formulário</p>
        <FormComponent/>
        
      </div>
      <div className="list-todo">
        <p>Lista de Afazeres</p>
        {todos.length === 0 && <p>Não há tarefas</p>}
      </div>
    </div>
  );
}

export default App;
