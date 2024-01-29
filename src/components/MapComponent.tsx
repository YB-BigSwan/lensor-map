/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import MapTileProvider from "../services/mapTileProvider";
import "leaflet/dist/leaflet.css";
import "../styles/map-component.css";

interface Layer {
  url: string;
  attribution: string;
}

const MapComponent = () => {
  const [center, setCenter] = useState({ lat: 60.173618, lng: 24.941112 });
  const defaultZoom = 15;

  const [selectedLayer, setSelectedLayer] =
    useState<string>("maptiler_satelite");

  useEffect(() => {
    // Use the Geolocation API to get the user's location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCenter({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.error("Error getting user location:", error);
      }
    );
  }, []);

  const switchLayer = (layerKey: string) => {
    setSelectedLayer(layerKey);
  };

  return (
    <>
      <div className="map-container">
        <MapContainer center={center} zoom={defaultZoom}>
          <TileLayer
            key={selectedLayer}
            url={
              (
                MapTileProvider[
                  selectedLayer as keyof typeof MapTileProvider
                ] || {}
              ).url
            }
            attribution={
              (
                MapTileProvider[
                  selectedLayer as keyof typeof MapTileProvider
                ] || {}
              ).attribution
            }
          />
        </MapContainer>
        <div className="layer-switcher">
          {Object.entries(MapTileProvider).map(([layerKey, layer]) => (
            <button
              key={layerKey}
              onClick={() => switchLayer(layerKey)}
              className={`layer-button ${
                layerKey === selectedLayer ? "active" : ""
              }`}
            >
              <img
                src={layer.image}
                alt={`${layerKey} Sample|`}
                className="layer-button-image"
              />
              {layer.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default MapComponent;
