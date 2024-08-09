import React, { useState } from "react";
import { GiornataNProvider } from "../Ap/Global/global.jsx";
import Body from "../Body/Body.jsx";
import Footer from "../Footer/footer.jsx";
import Header from "../Header/header.jsx";
import "./App.css";
import { GiornataClouProvider } from "./Global/global.jsx";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="h-screen xl:overflow-hidden">
      {/* {isAuthenticated ? ( */}
      <>
        <GiornataClouProvider>
          <GiornataNProvider>
            <Header />
            <Body />
            <Footer />
          </GiornataNProvider>
        </GiornataClouProvider>
      </>
      {/* ) : (
        <LoginPage onLogin={handleLogin} />
      )} */}
    </div>
  );
};

export default App;
