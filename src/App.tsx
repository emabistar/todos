import { useState } from "react";
import "./App.css";
import FormTodo from "./componets/FormTodo";
import Todo from "./componets/Todo";
interface todoData {
  text: string;
}
function App() {
  const [todos, setTodos] = useState([
    {
      text: "I am foing to bed. ",
    },
    {
      text: "Go to shop. ",
    },
    {
      text: "To to church. ",
    },
  ]);

  //Create a todo

  const addTodo = (text: string) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  //remove todo
  const removeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <h2 className="text-center"> Todos </h2>
      <div className="container">
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((item, index) => (
            <Todo
              removeTodo={removeTodo}
              key={index}
              index={index}
              todo={item}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
