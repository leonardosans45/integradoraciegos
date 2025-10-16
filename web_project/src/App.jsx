import { useState } from 'react'
import Header from './components/Header'
import Login from './Login'
import SignUp from './SignUp'
import backgroundImage from './assets/backgroundImage.jpg'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('home')

  const handleLoginClick = () => {
    setCurrentView('login')
  }

  const handleSignUpClick = () => {
    setCurrentView('signup')
  }

  const handleBackToHome = () => {
    setCurrentView('home')
  }

  const handleGoToSignUp = () => {
    setCurrentView('signup')
  }

  const handleGoToLogin = () => {
    setCurrentView('login')
  }

  return (
    <>
     {currentView === 'home' && (
       <>
         <Header onLoginClick={handleLoginClick} onSignUpClick={handleSignUpClick} />
         <section className='Main-section'>
          <img src={backgroundImage} className="Background-image" alt="background" />
          <div className='Main-text'>
            <h1>Navegate with confidence</h1>
            <p>experience the world with independence using our smart cane technology</p>
            <button className='Learn-more-button'>Learn more</button>
          </div>
         </section>
         <section className='Content-section'>
          <div className='Content-container'>
            <h2>Enpowering Independence</h2>
            <p>our smart cane is designed to enhance the mobility and independence of visually impaired individuals. with advanced sensors and intuitive design, it provides real-time feedback and navigation assistance, making every journey safer and more confident.</p>
          </div>
         </section>
       </>
     )}
     
     {currentView === 'login' && (
       <div>
         <Login onGoToSignUp={handleGoToSignUp} />
         <button onClick={handleBackToHome} className="back-to-home-btn">
           Back to Home
         </button>
       </div>
     )}
     
     {currentView === 'signup' && (
       <div>
         <SignUp onGoToLogin={handleGoToLogin} />
         <button onClick={handleBackToHome} className="back-to-home-btn">
           Back to Home
         </button>
       </div>
     )}
    </>
  )
}

export default App
