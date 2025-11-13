import React, { useEffect, useRef } from 'react';
import './MapView.css';

function SimpleMap({ onGoHome }) {
  const mapRef = useRef(null);

  useEffect(() => {
    // Cargar Leaflet dinámicamente
    const loadLeaflet = async () => {
      try {
        // Importar Leaflet CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);

        // Importar Leaflet JS
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        script.onload = () => {
          initMap();
        };
        document.head.appendChild(script);
      } catch (error) {
        console.error('Error loading Leaflet:', error);
      }
    };

    const initMap = () => {
      if (window.L && mapRef.current) {
        // Crear el mapa
        const map = window.L.map(mapRef.current).setView([20.6597, -103.3496], 16);

        // Agregar tiles de OpenStreetMap
var Stadia_OSMBright = window.L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png', {
          minZoom: 0,
          maxZoom: 20,
          attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          ext: 'png'
        }).addTo(map);

        // Agregar marcador
        const marker = window.L.marker([20.6597, -103.3496]).addTo(map);
        marker.bindPopup('<b>Smart Cane Location</b><br>Guadalajara, México').openPopup();

        // Agregar círculo de precisión
        const circle = window.L.circle([20.6597, -103.3496], {
          color: '#007bff',
          fillColor: '#007bff',
          fillOpacity: 0.2,
          radius: 10
        }).addTo(map);

        // Forzar redimensión del mapa
        setTimeout(() => {
          map.invalidateSize();
        }, 100);
      }
    };

    loadLeaflet();
  }, []);

  return (
    <div className="map-container">
      {/* Header con color original y título i-cane */}
      <div className="map-header">
        <div className="map-title">
          <h1>i-cane</h1>
          <p>Smart tracking system</p>
        </div>
        
        <button onClick={onGoHome} className="back-home-btn-red">
          ← Back Home
        </button>
      </div>

      {/* Mapa principal */}
      <div className="map-content">
        {/* Barra de información del dispositivo sobre el mapa */}
        <div className="device-info-overlay-right">
          <div className="device-info-content">
            <div className="device-status">
              <span className="status-connected">● Connected</span>
              <span className="battery-level">🔋 85%</span>
              <span className="device-id">ID: SC-001</span>
            </div>
            <div className="device-actions">
              <button className="overlay-btn">📍 Find</button>
              <button className="overlay-btn">🔔 Alert</button>
              <button className="overlay-btn">📊 History</button>
              <button className="overlay-btn disconnect">🔌 Disconnect</button>
            </div>
          </div>
        </div>

        <div 
          ref={mapRef} 
          className="leaflet-map-container"
        />
      </div>
    </div>
  );
}

export default SimpleMap;
