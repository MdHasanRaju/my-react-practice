import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Mobile></Mobile>
      <h1>Blogs</h1>
      <Blogs title="Frontend Developer" author="Mahmud"></Blogs>
      <Blogs title="Backend Developer" author="Hasan"></Blogs>
      <Blogs title="Mern stack Developer" author="Raju"></Blogs>
      <LoadTodoData></LoadTodoData>
    </div>
  );
}

function Mobile() {
  const [count, setCount] = useState(100)
  const handleBatteryDown = () =>{
    const newCount = count - 10;
    if (newCount < 0) {
      alert('Your phone is already switched off!!')
      return alert
    }
    setCount(newCount);
  }
  return (
    <div>
      <p>----------------------------</p>
      <h3>Mobile Battery: {count}%</h3>
      <button onClick={handleBatteryDown}>Battery Down</button>
    </div>
  )
}

function Blogs(props) {
  const myStyle = {
    color:'purple',
    fontWeight:800
  }
  return (
    <div>
      <article className="blog">
        <h2 style={myStyle}>This is {props.title}</h2>
        <p style={{color:'darkviolet', fontSize:'24px'}}>Author: {props.author}
        </p>
      </article>
    </div>
  );
}

function LoadTodoData() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);
  return (
    <div>
      <h3>Load Todo Data</h3>
      {
        todos.map((todo) => (<Todo id={todo.id} title={todo.title}></Todo>))
      }
    </div>
  );
}

function Todo(props) {
  return (
    <div
      style={{
        backgroundColor: "greenyellow",
        margin: "10px",
        borderRadius: "15px",
        padding: "15px",
      }}
    >
      <h3 style={{ color: "red", fontWeight: "700" }}>Todo Id: {props.id}</h3>
      <p style={{ color: "blue", fontWeight: "500" }}>
        Todo Title: {props.title}
      </p>
    </div>
  );
}

export default App;
