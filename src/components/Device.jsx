import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { deviceData } from "../assets/data";
function Device({activeTab, setActiveTab}) {
  const [localdata, setdata] = useState(
    () => JSON.parse(localStorage.getItem("localdata")) || deviceData
  );

  function handlechange(id) {
    setdata((localdata) => {
      const updatedChecked = [...localdata];
      updatedChecked[id].checked = !updatedChecked[id].checked;
      if (!updatedChecked[id].checked) {
        updatedChecked[id].serial = "";
        updatedChecked[id].image = null;
      }
      return updatedChecked;
    });
  }

  function handleserial(e, id) {
    setdata((localdata) => {
      const updatedChecked = [...localdata];
      updatedChecked[id].serial = e.target.value;
      console.log( updatedChecked[id].serial);
      return updatedChecked;
    });
  }
  function handleimage(e, id) {
    e.preventDefault();
    if (!e.target.files[0]) return;

    const reader = new FileReader();
    reader.onload = function (event) {
      setdata((localdata) => {
        const updatedChecked = [...localdata];
        updatedChecked[id].image = event.target.result;

        return updatedChecked;
      });
      e.target.value = "";
    };
    reader.readAsDataURL(e.target.files[0]);
  }
  useEffect(() => {
    localStorage.setItem("localdata", JSON.stringify(localdata));
  }, [localdata]);

  return (
    <div>
      <div>
        <div className="container" style={{ margin: "40px auto" }}>
          <Sidebar setActiveTab={setActiveTab} activeTab={activeTab} />

          <main className="main-content" style={{ width: 900 }}>
            <div className="sub">
              <h2>Device management</h2>
              <p>
                Add details of the device, if any already installed on your car.
                if none, then continue to next step.
              </p>
            </div>
           
            {localdata.map((data) => (
              <div className="device-container" key={data.id}>
                <h3 className="dch3">{data.device}</h3>

                <div className="dcinput">
                  <div className="device-type">
                    <p className="device-type-color">Device type</p>
                    <input
                      type="text"
                      value={data.devicetype}
                      readOnly
                      className="dtgps"
                    />
                  </div>

                  <div className="dtbringc">
                    <div className="dtbring">
                      <h3>Bringing your own device?</h3>
                      <div className="toggle-container">
                        <label className="toggle">
                          <input
                            type="checkbox"
                            id="toggle-input"
                            onChange={(e) => handlechange(data.id)}
                            checked={data.checked}
                          />
                          <span className="slider"></span>
                        </label>
                      </div>
                    </div>
                    <p>
                      Toggle this on if you're bringing you own device. Leave it
                      of if Drive mate is to provide the device.
                    </p>
                  </div>
                </div>

                {data.checked && (
                  <div className="dcinput">
                    <div className="device-type">
                      <p className="device-type-color">Serial number</p>

                      <input
                        type="text"
                        placeholder="Enter the serial number of the device"
                        className="dtgps" value={data.serial}
                        onChange={(e) => handleserial(e, data.id)}
                      />
                    </div>
                    <div className="dtbringc">
                      <p className="device-type-color">
                        Upload the image of the device
                      </p>
                      <div className="dtbringinput">
                        <label
                          className="dtserialLabel"
                          style={data.image && { padding: 0 }}
                        >
                          {data.image ? (
                            <img src={data.image} key={data.id} width="100%" />
                          ) : (
                            "Click here to upload"
                          )}
                          <input
                            type="file"
                            accept="image/*"
                            hidden
                            onChange={(e) => handleimage(e, data.id)}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </main>
        </div>
      </div>

      <div className="footer-button">
        <div className="s-next">
          <button className="next-btn">
            <strong>Next</strong>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Device;
