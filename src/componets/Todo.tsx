import React from "react";
interface Props {
  index: number;
  todo: { text: string };
  removeTodo: (index: number) => void;
}

function Todo({ todo, index, removeTodo }: Props) {
  return (
    <>
      <div className="container">
        {" "}
        <p>
          {todo.text}|
          <button className="btn btn-danger" onClick={() => removeTodo(index)}>
            X
          </button>
        </p>
        <hr />
      </div>
    </>
  );
}

export default Todo;
