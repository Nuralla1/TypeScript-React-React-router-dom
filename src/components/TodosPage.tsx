import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { ITodo, IUser } from "../types/types";
import List from "./List";
import TodoItem from "./TodoItem";

const TodosPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>("http://localhost:3600/todos");
      // const response = await fetch("http://localhost:3600/users");
      // const res: IUser[] = await response.json();
      setTodos(response.data);
    } catch (e) {
      alert(e);
    }
  }
  return (
    <List
      items={todos}
      renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
    />
  );
};

export default TodosPage;
