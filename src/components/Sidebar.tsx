import { Box, Button, Drawer } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import MapTileProvider from "../services/mapTileProvider";
import "../styles/sidebar.css";

// Sets anchor direction for MUI drawer
type Anchor = "left";

// Gets the selectedLayer from MapView and sets setSelectedLayer in MapView to pass to MapComponent
interface SidebarProps {
  selectedLayer: string;
  setSelectedLayer: React.Dispatch<React.SetStateAction<string>>;
}

const Sidebar: React.FC<SidebarProps> = ({
  selectedLayer,
  setSelectedLayer,
}) => {
  // Creating a basic isOpen type state did not use isOpen because the MUI drawer component was being finicky
  const [state, setState] = useState({
    left: false,
  });

  // Basic logic to switch layers
  const switchLayer = (layerKey: string) => {
    setSelectedLayer(layerKey);
  };

  // MUI drawer does not natively support onClickAway or onClickOutside so we have to create our own logic
  const drawerRef = useRef(null);
  const useOnClickOutside = (
    ref: React.RefObject<HTMLElement>,
    handler: (event: MouseEvent | TouchEvent) => void
  ) => {
    useEffect(() => {
      const listener = (event: MouseEvent | TouchEvent) => {
        if (!ref.current || ref.current.contains(event.target as Node)) {
          return;
        }
        handler(event);
      };

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handler]);
  };

  useOnClickOutside(drawerRef, () => {
    setState({ ...state, left: false });
  });

  // Logic to toggle the drawer
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

  // Basic templating for the MUI drawer list
  const list = (anchor: Anchor) => (
    <Box
      ref={drawerRef}
      className="menu-open"
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <h2>Lensor Map Demo</h2>
      <h3>Map Layers:</h3>
      <div className="layer-switcher">
        {Object.entries(MapTileProvider).map(([layerKey, layer]) => (
          <button
            key={layerKey}
            onClick={() => switchLayer(layerKey)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                switchLayer(layerKey);
              }
            }}
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
    </Box>
  );

  return (
    <div className="sidebar-container">
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} className="menu-button">
            <div className="burger-contrast">
              <FaBars size={30} className="burger" />
            </div>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Sidebar;
