import "./assets/css/style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Plan from "./components/Plan";
import Device from "./components/Device";
import { useEffect, useState } from "react";
import EarlyAccess from "./components/EarlyAccess";
import Template from "./components/Template";

function App() {
  const [activeTab, setActiveTab] = useState(
    () => JSON.parse(localStorage.getItem("tab")) || 8
  );

  const renderComponent = () => {
    switch (activeTab) {
      case 0:
        return <Template setActiveTab={setActiveTab} activeTab={activeTab} />
      case 1:
        return <Template setActiveTab={setActiveTab} activeTab={activeTab} />
        case 2:
        return <Template setActiveTab={setActiveTab} activeTab={activeTab} />
      case 3:
        return <Template setActiveTab={setActiveTab} activeTab={activeTab} />
        case 4:
        return <Template setActiveTab={setActiveTab} activeTab={activeTab} />
      case 5:
        return <Template setActiveTab={setActiveTab} activeTab={activeTab} />
        case 6:
        return <Template setActiveTab={setActiveTab} activeTab={activeTab} />
      case 7:
        return <Template setActiveTab={setActiveTab} activeTab={activeTab} />
        case 8:
        return <Plan setActiveTab={setActiveTab} activeTab={activeTab} />;
      case 9:
        return <Device setActiveTab={setActiveTab} activeTab={activeTab} />;
        case 10:
        return <EarlyAccess setActiveTab={setActiveTab} />;
      default:
        return <EarlyAccess setActiveTab={setActiveTab} />;
    }
  };
  useEffect(() => {
    localStorage.setItem("tab", JSON.stringify(activeTab));
  }, [activeTab]);
  return (
    <>
      <div style={{ paddingBottom: "5%" }}>
        <Header/>

        {renderComponent()}
      </div>

      {activeTab !== 10 && (
        <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
      )}
    </>
  );
}

export default App;
