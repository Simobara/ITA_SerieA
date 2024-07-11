import React, { useState } from 'react';
import Body from '../Body/Body.jsx';
import Footer from '../Footer/footer.jsx';
import Header from '../Header/header.jsx';
import LoginPage from '../LoginPage/loginPage.jsx';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="h-screen xl:overflow-hidden">
      {isAuthenticated ? (
        <>
          <Header />
          <Body />
          <Footer />
        </>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
