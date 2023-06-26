import React from "react";
import Lost from "../../images/lostMan.png";
import "./Error404.scss";

const Error404 = () => {
  return (
    <div className="error-main">
      <div className="error-content">
          <img src={Lost} alt="lost-man" />
        <h4>Hey, it seems you went down the wrong path.</h4>
        <h4>Use our menu above for guidance.</h4>
      </div>
    </div>
  );
};

export default Error404;
