import axios from "axios";
import React, { useEffect, useState } from "react";
import Card, { CardVariant } from "./components/Card";
import EventsExample from "./components/EventsExample";
import List from "./components/List";
import TodoItem from "./components/TodoItem";
import UserItem from "./components/UserItem";
import { ITodo, IUser } from "./types/types";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import { Link } from "react-router-dom";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

function App() {
  return (
    <>
      {/* <EventsExample />
      <Card
        height="200px"
        width="200px"
        variant={CardVariant.primary}
        onClick={(num) => console.log("privet", num)}
      >
        <button>Click</button>
      </Card> */}
      <BrowserRouter>
        <div>
          <Link to="/users" style={{ marginRight: 15 }}>
            Users
          </Link>
          <Link to="/todos">Todos</Link>
        </div>
        <Routes>
          <Route path="/users" element={<UserPage />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/users/:id" element={<UserItemPage />} />
          <Route path="/todos/:id" element={<TodoItemPage />} />
          <Route path="*" element={<div>Not found!</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
