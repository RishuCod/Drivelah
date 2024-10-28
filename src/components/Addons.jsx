import React, { useEffect, useState } from "react";
function Addons({ data }) {
  const [card, setCard] = useState(
    () => JSON.parse(localStorage.getItem("card")) || ""
  );
  function handlechange(e, id) {
    setCard(e.target.value);
  }
  useEffect(() => {
    localStorage.setItem("card", JSON.stringify(card));
  }, [card]);
  return (
    <>
      <div className="s-add-one">
        <h3>Select add-ons for your subscription</h3>
        <div className="add-one">
          {data.addone.map((data) => (
            <label>
              <p style={{ margin: 0 }}>{data}</p>

              <div
                style={{ display: "flex", justifyContent: "flex-end", flex: 1 }}
              >
                <input type="radio" name="addon" value="insurance" />
              </div>
            </label>
          ))}
        </div>
      </div>
      {data.id > 0 && (
        <div className="s-card">
          <h3>Add card details</h3>
          <input
            type="text"
            placeholder="1234 5678 1234 5678    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MM/YY  &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;CVC"
            className="card-input"
            onChange={(e) => handlechange(e, data.id)}
            value={card}
            style={{ ...(card && { backgroundImage: "none" }) }}
          />

          <p className="note">
            You will not be charged right now. Subscription will only start once
            your listing is published and live.
          </p>
        </div>
      )}
    </>
  );
}

export default Addons;
