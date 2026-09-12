"use client";

import React, { useEffect, useRef } from "react";
import L from "leaflet";

// Fix Leaflet marker icons default asset URL issue in Next.js/Webpack
const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface ChennaiMapProps {
  lat: string;
  lng: string;
  onPinChange: (lat: string, lng: string) => void;
  onClearPin: () => void;
}

export const ChennaiMap: React.FC<ChennaiMapProps> = ({
  lat,
  lng,
  onPinChange,
  onClearPin,
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);

  const CHENNAI_COORDS: [number, number] = [13.0827, 80.2707];

  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current).setView(CHENNAI_COORDS, 12);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      map.on("click", (e: L.LeafletMouseEvent) => {
        onPinChange(e.latlng.lat.toFixed(6), e.latlng.lng.toFixed(6));
      });

      mapInstanceRef.current = map;
    }

    setTimeout(() => {
      mapInstanceRef.current?.invalidateSize();
    }, 100);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update marker position when lat/lng props change
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (lat && lng) {
      const numLat = parseFloat(lat);
      const numLng = parseFloat(lng);
      if (!isNaN(numLat) && !isNaN(numLng)) {
        if (!markerRef.current) {
          markerRef.current = L.marker([numLat, numLng], { icon: defaultIcon }).addTo(map);
        } else {
          markerRef.current.setLatLng([numLat, numLng]);
        }
        map.setView([numLat, numLng], 15);
      }
    } else {
      if (markerRef.current) {
        map.removeLayer(markerRef.current);
        markerRef.current = null;
      }
    }
  }, [lat, lng]);

  const handleUseLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        onPinChange(pos.coords.latitude.toFixed(6), pos.coords.longitude.toFixed(6));
      },
      () => {
        alert("Could not read your location. Tap on the map directly to set your pin.");
      }
    );
  };

  return (
    <div className="space-y-2 mt-4 text-left">
      <p className="text-lg font-extrabold text-[#3d2c2a] tracking-tight">Pin your location</p>
      <p className="text-xs text-[#8a736c]">
        Optional. Tap the map or use your current location.
      </p>

      <div className="flex gap-2 py-1">
        <button
          type="button"
          onClick={handleUseLocation}
          className="flex-1 py-2 px-3 text-xs font-bold rounded-xl border border-[#ead9ce] bg-[#fffaf6] text-[#3d2c2a] hover:bg-[#f7f0ea] transition-colors cursor-pointer"
        >
          📍 Use my location
        </button>
        <button
          type="button"
          onClick={onClearPin}
          className="py-2 px-3 text-xs font-bold rounded-xl border border-[#ead9ce] bg-[#fffaf6] text-[#3d2c2a] hover:bg-[#f7f0ea] transition-colors cursor-pointer"
        >
          ❌ Clear pin
        </button>
      </div>

      <div ref={mapContainerRef} className="h-48 w-full rounded-xl border border-[#ead9ce]" />

      <p className="text-xs text-[#8a736c]">
        {lat && lng ? `Pinned: ${lat}, ${lng}` : "No pin yet. You can skip this."}
      </p>
    </div>
  );
};

export default ChennaiMap;
