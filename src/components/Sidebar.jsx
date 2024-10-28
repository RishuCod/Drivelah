import React, { useEffect, useState } from "react";
import { sidebar } from "../assets/data";
const Sidebar = ({ activeTab, setActiveTab }) => {
  const [index, setIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {windowWidth >= 768 ? (
        <aside className="sidebar">
          <ul>
            {sidebar.map((data, indexdata) => (
              <li style={{ display: "flex" }} key={data}>
                <a
                  href="#"
                  className={
                    indexdata > activeTab
                      ? "listitem"
                      : indexdata === activeTab
                      ? "listitem sidebarActive"
                      : "listitem"
                  }
                  style={{ ...(indexdata > activeTab && { color: "#666" }) }}
                >
                  {data}{" "}
                  {indexdata < activeTab && (
                    <img src="image/check.png" height={20} alt="check" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      ) : (
        <div style={{ width: 900 }}>
          <select id="options" className="selectH">
            {sidebar.map((data) => (
              <option value="option1">{data}</option>
            ))}
          </select>
        </div>
      )}
    </>
  );
};

export default Sidebar;
