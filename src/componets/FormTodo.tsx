import React, { useState } from "react";
interface Props {
  addTodo: ({ text }: any) => void;
}
function FormTodo({ addTodo }: Props) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // console.log(value);
    if (!value) return;
    addTodo(value);
    //console.log(value);
    setValue("");
  };

  return (
    <>
      <h3>Add new Todo</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="todo" className="form-label">
            Todos
          </label>
          <input
            id="todo"
            type="text"
            value={value}
            className="form-control"
            onChange={(e) => setValue(e.target.value)}
            placeholder="Add todo"
          />

          <button className="btn btn-primary m-3" type="submit">
            Submit
          </button>
        </div>
      </form>{" "}
    </>
  );
}

export default FormTodo;
