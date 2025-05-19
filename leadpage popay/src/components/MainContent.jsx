import React from "react";
import "./MainContent.css"; // ou HeroSection.css, se preferir separar

const MainContent = () => {
  return (
    <section className="hero-background">
      <div className="hero-content">
        <h1>FAÇA O SEU ORÇAMENTO</h1>
        <p>
          Garanta um futuro mais tranquilo, <br />
          comece a planejar desde já!
        </p>
        <button className="cta-button">100% GRÁTIS. BAIXE AGORA!</button>
      </div>
    </section>
  );
};

export default MainContent;
