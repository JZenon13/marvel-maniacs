import React from "react";
import { useNavigate } from "react-router-dom";
import "./landingPage.css";

function LandingPage({ enterSite, setEnterSite }) {
  const navigate = useNavigate();
  return (
    <div className="landingBackground">
      <h1 className="siteTitleText">Do you need a Hero (...or two)</h1>

      <div className="pillsImages">
        <div className="popUpText">
          <img
            className="pillsImages1"
            src="./images/Red.png"
            alt=""
            onDoubleClick={() => {
              navigate("/home");
              setEnterSite(!enterSite);
            }}
          />
        </div>
        <div className="popUpText">
          <img
            className="pillsImages2"
            src="./images/blue.png"
            alt=""
            onDoubleClick={() => navigate("/goodbye")}
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
