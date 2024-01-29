import "./App.css";
import MapComponent from "./components/MapComponent";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="application-container">
        <Sidebar />
        <MapComponent />
      </div>
    </>
  );
}

export default App;
