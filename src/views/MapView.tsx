import { useState } from "react";
import MapComponent from "../components/MapComponent";
import Sidebar from "../components/Sidebar";

function MapView() {
  const [selectedLayer, setSelectedLayer] =
    useState<string>("maptiler_satelite");

  return (
    <>
      <Sidebar
        selectedLayer={selectedLayer}
        setSelectedLayer={setSelectedLayer}
      />
      <MapComponent selectedLayer={selectedLayer} />
    </>
  );
}

export default MapView;
