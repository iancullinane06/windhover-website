import L from "leaflet";
import { MapContainer, ImageOverlay, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { CompassIcon } from "@phosphor-icons/react";

const bounds = L.latLngBounds([
  [51.17, -11], // Southwest corner of Ireland
  [55.72, -4.9],  // Northeast corner of Ireland
]);

// Reset Button Component
function ResetButton() {
  const map = useMap();

  const resetView = () => {
    map.fitBounds(bounds); // Reset the map view to the default bounds
  };

  return (
    <button
      onClick={resetView}
      className="absolute top-4 right-4 bg-sky-500 text-white p-2 rounded-full shadow-lg hover:bg-sky-600"
      style={{ zIndex: 1000 }} // Ensure the button is above the map
    >
      <CompassIcon size={24} />
    </button>
  );
}

function RhododendronMap() {
  return (
    <div className="bg-stone-300 dark:bg-stone-900 relative">
      <div className="container mx-auto relative">
        <MapContainer
          bounds={bounds}
          style={{ height: "500px", width: "100%", borderRadius: "16px" }}
          className="rounded-lg"
          zoom={7}
          scrollWheelZoom={true}
        >
          {/* Base Map Layer */}
          <TileLayer
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.nbdc.ie">National Biodiversity Data Centre</a>'
          />
          {/* Image Overlay */}
          <ImageOverlay
            url="/RhododendronMap.png"
            bounds={bounds}
          />

          {/* Reset Button */}
          <ResetButton />
        </MapContainer>
      </div>
    </div>
  );
}

export default RhododendronMap;