import React, { useEffect, useState } from "react";
import datas from "../assets/data";
import Addons from "./Addons";
function SelectPlan() {
  const [addone, setaddone] = useState(
    () => JSON.parse(localStorage.getItem("addone")) || ""
  );
  const [addoneid, setaddoneid] = useState(
    () => JSON.parse(localStorage.getItem("addoneid")) || -1
  );
  function handleclick(e) {
    e.preventDefault();
    if (addoneid === e.currentTarget.getAttribute("data-key") * 1) {
      setaddone("");
      setaddoneid(-1);
    } else {
      setaddoneid(e.currentTarget.getAttribute("data-key") * 1);
      setaddone(datas[e.currentTarget.getAttribute("data-key")]);
    }
  }

  useEffect(() => {
    console.log(localStorage.getItem("addone"));
    localStorage.setItem("addone", JSON.stringify(addone));
    localStorage.setItem("addoneid", JSON.stringify(addone.id));
  }, [addone]);
  return (
    <>
      <div className="s-plan">
        <h3>Select your plan</h3>
      </div>

      <div className="plans">
        {datas.map((data) => (
          <div
            className={addoneid === data.id ? "plan activate" : "plan"}
            key={data.id}
            data-key={data.id}
            onClick={handleclick}
          >
            <h3>{data.title}</h3>
            <ul>
              <li>
                <img src="public\image\icon.png" height="15px" width="15px" />
                &nbsp;{data.gps}
              </li>
              <li>
                <img
                  src="public\image\mileage.png"
                  height="15px"
                  width="15px"
                />{" "}
                &nbsp;{data.mileage}
              </li>
              <li>
                <img src="public\image\lock.png" height="15px" width="15px" />{" "}
                &nbsp;{data.key}
              </li>
            </ul>
            <p>
              <strong>{data.price > 0 ? `$${data.price}` : "Free"}</strong>
              {data.price > 0 ? "/month" : ""}
            </p>
          </div>
        ))}
      </div>
      {addone && <Addons data={addone} />}
      <div className="s-info">
        <p>
          Learn more about the plans here -{" "}
          <a href="" style={{ textDecoration: "underline" }}>
            <strong>What is the right plan for me?</strong>{" "}
          </a>
          <br />
          <br /> You will be able to switch between plans easily later as well.
          Speak to our host success team if you need any clarifications.
        </p>
      </div>
    </>
  );
}

export default SelectPlan;
