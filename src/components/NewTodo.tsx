import React, { useRef, useContext } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = (props) => {
  const textRef = useRef<HTMLInputElement>(null);
  const { addTodo } = useContext(TodosContext);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textRef.current!.value;
    if (enteredText.trim().length === 0) {
      // throw error
      return;
    } else {
      addTodo(enteredText);
      //   textRef.current.value=""
    }
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={textRef} />
      <button>Add</button>
    </form>
  );
};

export default NewTodo;
