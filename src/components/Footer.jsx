import React from "react";

function Footer({activeTab,setActiveTab}) {
  function handleclick(){
setActiveTab((s)=>s+1)
  }
  return (
    <div className="footer-button">
      <div className="s-next">
        <button className="next-btn" onClick={handleclick}> 
          <strong>Next</strong>
        </button>
      </div>
    </div>
  );
}

export default Footer;
