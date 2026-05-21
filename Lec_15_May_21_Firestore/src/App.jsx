import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { db } from './firebase';

const App = () => {
  const [todo, setTodo] = React.useState('');
  const [todos, setTodos] = React.useState([]);
  const [editTodo,setEditTodo] = React.useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    if (todo.trim() === '') {
      alert('Please enter a todo');
      return;
    }
    if(editTodo){
      //firestore update
      try {
        await updateDoc(doc(db, 'todos', editTodo.id), {
          text: todo,
          completed: false,
          createdAt: new Date()
        });
        console.log('Todo updated successfully');
        setEditTodo(null);
        setTodo('');
        fetchTodos();
      } catch (error) {
        console.error('Error updating todo: ', error);
      }
      return;
    }
    //firestore insert
    addDoc(collection(db, 'todos'), {
      text: todo,
      completed: false,
      createdAt: new Date()
    }).then(() => {
      console.log('Todo added successfully');
    }).catch((error) => {
      console.error('Error adding todo: ', error);
    });
    setTodo('');
    fetchTodos();
  }


  async function fetchTodos() {
    try {
      await getDocs(collection(db, 'todos')).then((querySnapshot) => {
        const todos = [];
        querySnapshot.forEach((doc) => {
          todos.push({ ...doc.data(), id: doc.id });
        });
        setTodos(todos);
      });
    } catch (error) {
      console.error('Error fetching todos: ', error);
    }
  }

  async function deleteTodo(id) {
    //firestore delete
    try {
      await deleteDoc(doc(db, 'todos', id));
      console.log('Todo deleted successfully');
      fetchTodos();
    } catch (error) {
      console.error('Error deleting todo: ', error);
    }
  }



  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h2>Todo App</h2>
      <form onSubmit={handleSubmit}>
        <input type="text"
          placeholder='enter todo'
          value={todo}
          onChange={e => setTodo(e.target.value)} />
        <button type="submit">{editTodo?"Edit Todo":"Add Todo"}</button>
      </form>

      <h2>Todos:</h2>
      <ul>
        {todos.map(todo => (
          <div key={todo.id} style={{display:'flex',gap:'1rem'}}>
            <li key={todo.id}>{todo.text}</li>
            <button onClick={()=>{
              setEditTodo(todo)
              setTodo(todo.text)
            }}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default App
