import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MapView from "./views/MapView";
import "./App.css";

function App() {
  return (
    // I just set up routing here in case I want to expand this a bit later to put as a project on my portfolio
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MapView />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
