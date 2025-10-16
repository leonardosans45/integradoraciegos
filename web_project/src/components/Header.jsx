import appLogo from '../assets/appLogo.png'

function Header({ onLoginClick, onSignUpClick }) {
  return (
    <header className="App-header">
      <img src={appLogo} className="App-logo" alt="logo" />
      <div className='Information-buttons'>
        <button className='About-button'>About</button>
        <button className='Features-buttom'>Features</button>
        <button className='Support-button'>Support</button>   
      </div>
      <div className='Important-buttons'>
        <button className='Buy-button'>Buy cane</button>
        <button className='Login-button' onClick={onLoginClick}>Login</button>
        <button className='Signup-button' onClick={onSignUpClick}>Sign Up</button>   
      </div>
    </header>
  )
}

export default Header
