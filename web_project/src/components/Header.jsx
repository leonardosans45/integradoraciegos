import appLogo from '../assets/appLogo.png'

function Header({ onLoginClick, onSignUpClick, onBuyCaneClick, onAboutClick, onFeaturesClick, onContactUsClick }) {
  return (
    <header className="App-header">
      <img src={appLogo} className="App-logo" alt="logo" />
      <div className='Information-buttons'>
        <button className='About-button' onClick={onAboutClick}>About</button>
        <button className='Features-buttom' onClick={onFeaturesClick}>Features</button>
        <button className='Contact-button' onClick={onContactUsClick}>Contact us</button>   
      </div>
      <div className='Important-buttons'>
        <button className='Buy-button' onClick={onBuyCaneClick}>Buy cane</button>
        <button className='Login-button' onClick={onLoginClick}>Login</button>
        <button className='Signup-button' onClick={onSignUpClick}>Sign Up</button>   
      </div>
    </header>
  )
}

export default Header
