import './Features.css'

function Features({ onBackToHome }) {
  return (
    <div className="features-container">
      <div className="features-content">
        <h1 className="features-title">Smart Cane Features</h1>
        <p className="features-intro">
          Our smart cane incorporates cutting-edge technology to provide enhanced mobility and independence for visually impaired users.
        </p>
        
        <div className="features-grid">
          <div className="feature-card">
            <h3 className="feature-title">360° Detection and Terrain</h3>
            <p className="feature-description">
              The cane uses ultrasonic sensors to find obstacles in front of the user and a low-cost LiDAR sensor to scan the ground. This mix helps to detect objects and vertical dangers like stairs, ramps, and uneven surfaces in real time.
            </p>
          </div>
          
          <div className="feature-card">
            <h3 className="feature-title">Touch and Sound Interaction</h3>
            <p className="feature-description">
              Communication with the user is non-visual, using haptic feedback (specific vibrations) and voice alerts. This makes sure the user gets clear instructions and can react to dangers immediately without being distracted.
            </p>
          </div>
          
          <div className="feature-card">
            <h3 className="feature-title">Real-Time Connectivity and GPS</h3>
            <p className="feature-description">
              The device includes a mobile connection module to constantly send GPS location data and sensor readings to the server. This continuous data transfer is essential for system data processing and monitoring features.
            </p>
          </div>
          
          <div className="feature-card">
            <h3 className="feature-title">Battery Life and Practical Design</h3>
            <p className="feature-description">
              The cane's electronic design is efficient to ensure low power consumption and a long-lasting battery, which is very important for daily movement. An internal microcontroller manages the sensor readings before they are sent.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
