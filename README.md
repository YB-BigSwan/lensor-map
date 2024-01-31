# Lensor Map Take Home Task
This is a basic web application built with React, TypeScript, Leaflet, and MUI that displays raster tile maps from free XYZ tile servers. Users can pan, zoom, and switch between layers. 

You can check it out <a href="https://yb-bigswan.github.io/lensor-map/" target="_blank">HERE</a>!

## Prerequisites
- Node.js and npm (Node Package Manager)

## Getting Started (Setup and run locally)
1. Clone the repository:
```
git clone https://github.com/YB-BigSwan/lensor-map
```
2. Change to the project directory and install dependencies:
```
cd lensor-map
npm install
```
3. Run the project locally
```
npm run dev
```

### Design Decisions:
Due to the nature of the project I tried to create an elegantly simple UI design. The aim was to create a responsive, accessible, and simple UI that allows the user to view as  much of the map as possible. 

One notable change made during development involved relocating the layer switching buttons. Initially they were positioned over the top of the map in the bottom-left corner (in the style of Google Maps' desktop site). However, while testing for mobile and tablet viewports I realized they took up far too much screen real-estate, so I moved them into a React MUI drawer.

### Challenges:
Overall this task was pretty straightforward and fun. There were two small "challenges" along the way, but they were both resolved quickly. These challenges were:
- Positioning Leaflet's control zoom (z-index related issue).
- Properly updating the center position of the MapContainer after the user accepts location permissions. After another look at the Leaflet docs I realized I just forgot to pass the key prop to the MapContainer.

Other than that the rest of the development process went smoothly. 



