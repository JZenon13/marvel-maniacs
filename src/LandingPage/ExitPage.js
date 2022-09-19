import React from "react";
import { useNavigate } from "react-router-dom";

function ExitPage() {
  const navigate = useNavigate();
  return (
    <div>
      <img
        className="exitPage"
        src="https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Buddy-Pine.The-Incredibles.webp"
        alt=""
        onClick={() => navigate("/")}
      />
    </div>
  );
}

export default ExitPage;
