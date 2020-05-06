import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';

const ENDPOINT = 'http://localhost:3333';

function App() {
  const [users, setUsers] = useState('');

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on('users', data => {
      setUsers(data);
    });
  }, []);

  return <p>{users}</p>;
}

export default App;
