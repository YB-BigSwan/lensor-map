import maptilerImage from "../assets/MapTilerSatelite.png";
import openStreetMapImage from "../assets/OpenStreetMap.png";
import CartoDBImage from "../assets/CartoDB.png";

export default {
  maptiler_satelite: {
    name: "MapTiler",
    url: "https://api.maptiler.com/tiles/satellite-v2/{z}/{x}/{y}.jpg?key=VjBDlct7jrEioDsTtOGS",
    attribution:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    image: maptilerImage,
  },
  openstreetmap: {
    name: "OpenStreetMap",
    url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution:
      '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    image: openStreetMapImage,
  },
  carto_db: {
    name: "CartoDB",
    url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
    attribution:
      '<a href="https://www.carto.com/attribution" target="_blank">© CARTO</a>',
    image: CartoDBImage,
  },
};
