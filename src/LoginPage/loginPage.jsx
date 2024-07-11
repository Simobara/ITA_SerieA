//?  PAGINA LOGIN NUMEO EMAILT TRAMITE EMAIL

import axios from 'axios';
import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const re = /^[0-9]{10}$/;
    return re.test(phoneNumber);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert('Email non valida');
      return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      alert('Numero di cellulare non valido');
      return;
    }

    // Invia i dettagli al backend
    try {
      const response = await axios.post('http://localhost:3001/login', { email, phoneNumber });
      if (response.data.success) {
        window.location.href = 'https://ita-serie-a.vercel.app/'; // Reindirizza al sito specificato
      } else {
        alert('Errore durante l\'invio delle credenziali');
      }
    } catch (error) {
      console.error(error); // Log dell'errore
      alert('Errore durante l\'invio delle credenziali');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            type="text" 
            placeholder="Numero di cellulare" 
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)} 
            className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
            Invia
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

// ? PAGINA LOGIN OTP
// import axios from 'axios';
// import React, { useState } from 'react';

// const LoginPage = ({ onLogin }) => {
//   const [step, setStep] = useState(1);
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [otp, setOtp] = useState('');
//   const [password, setPassword] = useState('');
//   const [isPhoneVerified, setIsPhoneVerified] = useState(false);

//   const handlePhoneSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:3001/send-otp', { phoneNumber });
//       setStep(2);
//     } catch (error) {
//       alert('Errore durante l\'invio dell\'OTP');
//     }
//   };

//   const handleOtpSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:3001/verify-otp', { phoneNumber, otp });
//       setIsPhoneVerified(true);
//       setStep(3);
//     } catch (error) {
//       alert('OTP non valido');
//     }
//   };

//   const handleLoginSubmit = (e) => {
//     e.preventDefault();
//     if (isPhoneVerified && password === '3333') {
//       onLogin(phoneNumber, password);
//     } else {
//       alert('Credenziali non valide');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
//         <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
//         {step === 1 && (
//           <form onSubmit={handlePhoneSubmit}>
//             <input 
//               type="text" 
//               placeholder="Numero di cellulare" 
//               value={phoneNumber} 
//               onChange={(e) => setPhoneNumber(e.target.value)} 
//               className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
//               Invia OTP
//             </button>
//           </form>
//         )}
//         {step === 2 && (
//           <form onSubmit={handleOtpSubmit}>
//             <input 
//               type="text" 
//               placeholder="Codice OTP" 
//               value={otp} 
//               onChange={(e) => setOtp(e.target.value)} 
//               className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
//               Verifica OTP
//             </button>
//           </form>
//         )}
//         {step === 3 && (
//           <form onSubmit={handleLoginSubmit}>
//             <input 
//               type="password" 
//               placeholder="Password" 
//               value={password} 
//               onChange={(e) => setPassword(e.target.value)} 
//               className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
//               Login
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


// // ? PAGINA LOGIN NORMALE
// import React, { useState } from 'react';

// const LoginPage = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onLogin(username, password);
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm" onSubmit={handleSubmit}>
//         <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
//         <input 
//           type="text" 
//           placeholder="Username" 
//           value={username} 
//           onChange={(e) => setUsername(e.target.value)} 
//           className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <input 
//           type="password" 
//           placeholder="Password" 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)} 
//           className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;
