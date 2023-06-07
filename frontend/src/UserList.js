import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.username}>
            <strong>Username:</strong> {user.username}<br />
            <strong>Name:</strong> {user.name}<br />
            <strong>Position:</strong> {user.position}<br />
            <strong>Location:</strong> {user.location}<br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
