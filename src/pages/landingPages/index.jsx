import React from "react";
import MainContent from "src/components/mainContent/MainContent.jsx";
import HeaderPage from "src/components/Header/HeaderPage.jsx";

function landingPage() {
  return (
    <div className="app">
      <HeaderPage />
      <MainContent />
    </div>
  );
}

export default landingPage;