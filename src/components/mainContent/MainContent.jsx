import React from "react";
import "./MainContent.css";
import { useNavigate } from 'react-router-dom';

const MainContent = () => {
  const navigate = useNavigate();

  const irParaHomePage = () => {
    navigate('/dashboard');
  };
  return (

    
    <section className="hero-background">
      <div className="hero-content">
        <h1>ORGANIZE SUAS FINANÇAS AGORA!</h1>
        <p>
          Garanta um futuro mais tranquilo, <br />
          comece a planejar desde já!
        </p>
        <button className="cta-button" onClick={irParaHomePage}>Comece agora!</button>
      </div>
    </section>
  );
};

export default MainContent;