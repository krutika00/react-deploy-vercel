import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';
import Main from "./components/Main";
import Footer from "./components/Footer";

const Home = () => {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate("/about");
  };

  const handleContactClick = () => {
    navigate("/contact");
  };
  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div>
    <header>
        <div class="logo"><img src="logo512.png" width={50} height={50}/>React Design</div>
        <div class="login-menu">
            <div class="login-item" onClick={handleContactClick}>Contact</div>
            <div class="login-item" onClick={handleAboutClick}>About</div>
            <div class="login-item" onClick={handleLoginClick}>Login</div>
           
        </div>
    </header>
    <Main />
    <Footer />
    </div>
  );
};

export default Home;