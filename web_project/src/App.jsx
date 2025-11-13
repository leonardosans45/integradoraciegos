import { useState } from 'react'
import Header from './components/Header'
import Login from './Login'
import SignUp from './SignUp'
import ForgotPassword from './ForgotPassword'
import SimpleMap from './SimpleMap'
import PurchasePage from './PurchasePage'
import About from './About'
import Features from './Features'
import ContactUs from './ContactUs'
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

  const handleGoToForgotPassword = () => {
    setCurrentView('forgotpassword')
  }

  const handleLoginSuccess = () => {
    setCurrentView('map')
  }

  const handleGoToMap = () => {
    setCurrentView('map')
  }

  const handleBuyCaneClick = () => {
    setCurrentView('purchase')
  }

  const handleAboutClick = () => {
    setCurrentView('about')
  }

  const handleFeaturesClick = () => {
    setCurrentView('features')
  }

  const handleContactUsClick = () => {
    setCurrentView('contactus')
  }

  return (
    <>
     {currentView === 'home' && (
       <div className="with-header">
         <Header onLoginClick={handleLoginClick} onSignUpClick={handleSignUpClick} onBuyCaneClick={handleBuyCaneClick} onAboutClick={handleAboutClick} onFeaturesClick={handleFeaturesClick} onContactUsClick={handleContactUsClick} />
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
       </div>
     )}
     
     {currentView === 'login' && (
       <div className="full-page">
         <Login onGoToSignUp={handleGoToSignUp} onGoToForgotPassword={handleGoToForgotPassword} onLoginSuccess={handleLoginSuccess} />
         <button onClick={handleBackToHome} className="back-to-home-btn">
           ← Back to Home
         </button>
       </div>
     )}

     {currentView === 'map' && (
       <div className="full-page">
         <SimpleMap onGoHome={handleBackToHome} />
       </div>
     )}

     {currentView === 'forgotpassword' && (
       <div className="full-page">
         <ForgotPassword onGoToLogin={handleGoToLogin} />
         <button onClick={handleBackToHome} className="back-to-home-btn">
           ← Back to Home
         </button>
       </div>
     )}
     
     {currentView === 'signup' && (
       <div className="full-page">
         <SignUp onGoToLogin={handleGoToLogin} />
         <button onClick={handleBackToHome} className="back-to-home-btn">
           ← Back to Home
         </button>
       </div>
     )}
     
     {currentView === 'purchase' && (
       <div className="with-header">
         <Header onLoginClick={handleLoginClick} onSignUpClick={handleSignUpClick} onBuyCaneClick={handleBuyCaneClick} onAboutClick={handleAboutClick} onFeaturesClick={handleFeaturesClick} onContactUsClick={handleContactUsClick} />
         <PurchasePage onBackToHome={handleBackToHome} />
       </div>
     )}
     
     {currentView === 'about' && (
       <div className="with-header">
         <Header onLoginClick={handleLoginClick} onSignUpClick={handleSignUpClick} onBuyCaneClick={handleBuyCaneClick} onAboutClick={handleAboutClick} onFeaturesClick={handleFeaturesClick} onContactUsClick={handleContactUsClick} />
         <About onBackToHome={handleBackToHome} />
       </div>
     )}
     
     {currentView === 'features' && (
       <div className="with-header">
         <Header onLoginClick={handleLoginClick} onSignUpClick={handleSignUpClick} onBuyCaneClick={handleBuyCaneClick} onAboutClick={handleAboutClick} onFeaturesClick={handleFeaturesClick} onContactUsClick={handleContactUsClick} />
         <Features onBackToHome={handleBackToHome} />
       </div>
     )}
     
     {currentView === 'contactus' && (
       <div className="with-header">
         <Header onLoginClick={handleLoginClick} onSignUpClick={handleSignUpClick} onBuyCaneClick={handleBuyCaneClick} onAboutClick={handleAboutClick} onFeaturesClick={handleFeaturesClick} onContactUsClick={handleContactUsClick} />
         <ContactUs />
       </div>
     )}
    </>
  )
}

export default App
