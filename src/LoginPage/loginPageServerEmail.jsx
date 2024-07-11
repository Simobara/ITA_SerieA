//?  PAGINA LOGIN NUMERO EMAILT TRAMITE EMAIL

// import axios from 'axios';
// import React, { useState } from 'react';

// const LoginPage = ({ onLogin }) => {
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');

//   const validateEmail = (email) => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(email);
//   };

//   const validatePhoneNumber = (phoneNumber) => {
//     const re = /^[0-9]{10}$/;
//     return re.test(phoneNumber);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateEmail(email)) {
//       alert('Email non valida');
//       return;
//     }

//     if (!validatePhoneNumber(phoneNumber)) {
//       alert('Numero di cellulare non valido');
//       return;
//     }

//     // Invia i dettagli al backend
//     try {
//       const response = await axios.post('http://localhost:3001/login', { email, phoneNumber });
//       if (response.data.success) {
//         window.location.href = 'https://ita-serie-a.vercel.app/'; // Reindirizza al sito specificato
//       } else {
//         alert('Errore durante l\'invio delle credenziali');
//       }
//     } catch (error) {
//       console.error(error); // Log dell'errore
//       alert('Errore durante l\'invio delle credenziali');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
//         <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
//         <form onSubmit={handleSubmit}>
//           <input 
//             type="text" 
//             placeholder="Email" 
//             value={email} 
//             onChange={(e) => setEmail(e.target.value)} 
//             className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input 
//             type="text" 
//             placeholder="Numero di cellulare" 
//             value={phoneNumber} 
//             onChange={(e) => setPhoneNumber(e.target.value)} 
//             className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
//             Invia
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

