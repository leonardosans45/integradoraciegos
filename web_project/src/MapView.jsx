import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './MapView.css';

// Fix para los iconos de Leaflet en Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// Icono personalizado para el bastón
const caneIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/2913/2913465.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

function MapView({ onGoHome }) {
  // Estado para la posición del bastón (simulada)
  const [canePosition, setCanePosition] = useState({
    lat: 20.6597,
    lng: -103.3496,
    timestamp: new Date()
  });

  // Estado para el historial de ubicaciones
  const [locationHistory, setLocationHistory] = useState([]);
  
  // Estado para el estado de conexión del bastón
  const [isConnected, setIsConnected] = useState(true);
  
  // Estado para la batería del bastón
  const [batteryLevel, setBatteryLevel] = useState(85);

  // Estado para manejo de errores del mapa
  const [mapError, setMapError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Efecto para simular carga del mapa
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Simular actualizaciones de posición del bastón
  useEffect(() => {
    const interval = setInterval(() => {
      // Simular pequeños movimientos aleatorios
      setCanePosition(prev => {
        const newLat = prev.lat + (Math.random() - 0.5) * 0.001;
        const newLng = prev.lng + (Math.random() - 0.5) * 0.001;
        const newPosition = {
          lat: newLat,
          lng: newLng,
          timestamp: new Date()
        };
        
        // Agregar al historial
        setLocationHistory(history => [...history.slice(-10), prev]);
        
        return newPosition;
      });
      
      // Simular cambios en la batería
      setBatteryLevel(prev => {
        const change = Math.random() > 0.7 ? -1 : 0;
        return Math.max(10, prev + change);
      });
    }, 5000); // Actualizar cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  const getBatteryColor = () => {
    if (batteryLevel > 50) return '#28a745';
    if (batteryLevel > 20) return '#ffc107';
    return '#dc3545';
  };

  const getConnectionStatus = () => {
    return isConnected ? 'Connected' : 'Disconnected';
  };

  return (
    <div className="map-container">
      {/* Header del mapa */}
      <div className="map-header">
        <div className="map-title">
          <h1>Smart Cane Tracking</h1>
          <p>Real-time location monitoring</p>
        </div>
        
        <div className="map-controls">
          <div className="cane-status">
            <div className={`status-indicator ${isConnected ? 'connected' : 'disconnected'}`}>
              <span className="status-dot"></span>
              {getConnectionStatus()}
            </div>
            
            <div className="battery-indicator">
              <div className={`battery-icon ${batteryLevel > 50 ? 'battery-high' : batteryLevel > 20 ? 'battery-medium' : 'battery-low'}`}>
                🔋 {batteryLevel}%
              </div>
            </div>
            
            <div className="last-update">
              Last update: {canePosition.timestamp.toLocaleTimeString()}
            </div>
          </div>
          
          <button onClick={onGoHome} className="back-home-btn">
            ← Back to Home
          </button>
        </div>
      </div>

      {/* Mapa principal */}
      <div className="map-content">
        {isLoading ? (
          <div className="map-loading">
            <div className="loading-icon">🗺️</div>
            <div className="loading-text">Loading map...</div>
          </div>
        ) : mapError ? (
          <div className="map-error">
            <div className="error-icon">⚠️</div>
            <div className="error-text">Error loading map</div>
            <button 
              onClick={() => { setMapError(false); setIsLoading(true); }}
              className="retry-btn"
            >
              Retry
            </button>
          </div>
        ) : (
          <MapContainer
            center={[canePosition.lat, canePosition.lng]}
            zoom={16}
            className="map-container-leaflet"
            whenCreated={(map) => {
              // Forzar que el mapa se renderice correctamente
              setTimeout(() => {
                map.invalidateSize();
              }, 100);
            }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            
            {/* Marcador actual del bastón */}
            <Marker position={[canePosition.lat, canePosition.lng]} icon={caneIcon}>
              <Popup>
                <div className="popup-content">
                  <h3>Smart Cane Location</h3>
                  <p><strong>Status:</strong> {getConnectionStatus()}</p>
                  <p><strong>Battery:</strong> {batteryLevel}%</p>
                  <p><strong>Coordinates:</strong></p>
                  <p>Lat: {canePosition.lat.toFixed(6)}</p>
                  <p>Lng: {canePosition.lng.toFixed(6)}</p>
                  <p><strong>Last Update:</strong></p>
                  <p>{canePosition.timestamp.toLocaleString()}</p>
                </div>
              </Popup>
            </Marker>

            {/* Círculo de precisión */}
            <Circle
              center={[canePosition.lat, canePosition.lng]}
              radius={10}
              fillColor="#007bff"
              fillOpacity={0.2}
              color="#007bff"
              weight={2}
            />

            {/* Historial de ubicaciones */}
            {locationHistory.map((location, index) => (
              <Circle
                key={index}
                center={[location.lat, location.lng]}
                radius={3}
                fillColor="#28a745"
                fillOpacity={0.6}
                color="#28a745"
                weight={1}
              />
            ))}
          </MapContainer>
        )}
      </div>

      {/* Panel de información lateral */}
      <div className="info-panel">
        <div className="panel-section">
          <h3>Device Information</h3>
          <div className="info-item">
            <span className="info-label">Device ID:</span>
            <span className="info-value">SC-001</span>
          </div>
          <div className="info-item">
            <span className="info-label">Model:</span>
            <span className="info-value">SmartCane Pro</span>
          </div>
          <div className="info-item">
            <span className="info-label">Firmware:</span>
            <span className="info-value">v2.1.3</span>
          </div>
        </div>

        <div className="panel-section">
          <h3>Location Details</h3>
          <div className="info-item">
            <span className="info-label">Latitude:</span>
            <span className="info-value">{canePosition.lat.toFixed(6)}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Longitude:</span>
            <span className="info-value">{canePosition.lng.toFixed(6)}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Accuracy:</span>
            <span className="info-value">±10 meters</span>
          </div>
        </div>

        <div className="panel-section">
          <h3>Quick Actions</h3>
          <button className="action-btn primary">
            📍 Find My Cane
          </button>
          <button className="action-btn secondary">
            🔔 Send Alert
          </button>
          <button className="action-btn secondary">
            📊 View History
          </button>
          <button 
            className="action-btn danger"
            onClick={() => setIsConnected(!isConnected)}
          >
            {isConnected ? '🔌 Disconnect' : '🔌 Connect'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MapView;
