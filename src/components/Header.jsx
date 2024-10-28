import React, { useEffect, useState } from "react";
function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [drawer, setdrwer] = useState(false);

  function handleclick() {
    setdrwer(!drawer);
  }
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (windowWidth >= 768) {
        setdrwer(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      {drawer && (
        <div className="drawer">
          <a href="" onClick={handleclick}>
            {" "}
            <img
              src="public\image\bars.png"
              width="40px"
              height="40px"
              style={{
                position: "absolute",
                left: "47%",
                top: "3px",
                cursor: "pointer",
              }}
            />
          </a>
          <a href="#">Learn more</a>
          <a href="#">List your car</a>
          <a href="#">inbox</a>
        </div>
      )}
      <div className="header">
        <img
          src="public\image\logo.png"
          height="27px"
          style={{ ...(windowWidth >= 768 && { paddingRight: "60%" }) }}
        />

        {windowWidth >= 768 ? (
          <>
            <a href="">Learn more</a>
            <a href="">List your car</a>
            <a href="">inbox</a>
          </>
        ) : (
          <img
            src="public\image\bars.png"
            width="40px"
            height="40px"
            style={{
              position: "absolute",
              left: "3%",
              top: "3px",
              cursor: "pointer",
            }}
            onClick={handleclick}
          />
        )}

        <img
          src="public\image\user.png"
          width="40px"
          height="40px"
          style={{
            ...(windowWidth <= 768 && {
              position: "absolute",
              left: "92%",
              top: "3px",
              cursor: "pointer",
            }),
          }}
        />
      </div>
    </div>
  );
}

export default Header;
