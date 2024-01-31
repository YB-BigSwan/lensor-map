import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import MapTileProvider from "../services/mapTileProvider";
import "../styles/map-component.css";

interface MapComponentProps {
  selectedLayer: string;
}

// selectedLayer is a prop from our sidebar where the user can pick layers
const MapComponent: React.FC<MapComponentProps> = ({ selectedLayer }) => {
  // Sets a default center if the user does not allow their locationn to be used
  const [center, setCenter] = useState({ lat: 60.173618, lng: 24.941112 });
  const defaultZoom = 15;

  // Use the Geolocation API to ask for the user's location on first page load
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Error getting user location:", error);
      }
    );
  }, []);

  return (
    <>
      <div className="map-container">
        <MapContainer
          key={`${center.lat}-${center.lng}`}
          center={center}
          zoom={defaultZoom}
        >
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
      </div>
    </>
  );
};

export default MapComponent;
