'use client'

import axios from 'axios';
import { useState, useEffect } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";

interface User {
  id: number;
  name: string;
}

export default function Page() {
  const [users, setUsers] = useState<User []>([]);
  const [error, setError] = useState('');
  useEffect(() => {
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
      .catch(err => setError(err.message));

  }, [])

  return (
    <>
      {error && <p className='text-danger'>{error}</p>}
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  );
}