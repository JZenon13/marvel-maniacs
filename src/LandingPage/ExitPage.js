import React from "react";
import { useNavigate } from "react-router-dom";

function ExitPage() {
  const navigate = useNavigate();
  return (
    <div>
      <img
        className="exitPage"
        src="./images/antiHero.png"
        alt=""
        onClick={() => navigate("/")}
      />
    </div>
  );
}

export default ExitPage;
