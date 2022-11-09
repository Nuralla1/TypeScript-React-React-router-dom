import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../types/types";
import List from "./List";
import UserItem from "./UserItem";

const UserPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>("http://localhost:3600/users");
      // const response = await fetch("http://localhost:3600/users");
      // const res: IUser[] = await response.json();
      setUsers(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <List
      items={users}
      renderItem={(user: IUser) => (
        <UserItem
          user={user}
          key={user.id}
          onClick={(user) => navigate("/users/" + user.id)}
        />
      )}
    />
  );
};

export default UserPage;
