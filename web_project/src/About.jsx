import './About.css'

function About({ onBackToHome }) {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About the Cane</h1>
        <p className="about-paragraph">
          Based on the problem of poor urban infrastructure in Chihuahua, the idea for the Guiding Cane began as a social engineering solution to deal with the constant danger and lack of independence faced by people with visual disabilities in the city. The project aims to turn a simple cane into a smart, connected device that works like an electronic eye, using sensors and real-time technology. Its main goal is to increase user safety by giving them immediate information about their surroundings through voice instructions and vibrations, and at the same time, to empower them to achieve completely independent and safe mobility, helping to create more inclusive cities.        </p>
      </div>
    </div>
  )
}

export default About
