// ? PAGINA LOGIN NORMALE
import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'simobara@hotmail.it' && password === '2410') {
      onLogin(username, password);
    } else {
      alert('Credenziali non valide');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
