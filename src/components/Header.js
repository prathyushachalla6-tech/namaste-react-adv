import { LOGO_URL } from '../utils/constants'
import { useState } from 'react'
const Header = () => {
  const [btnName, setBtnName] = useState('Login')
  console.log('Header rendered')
  return (
    <div className='header'>
      <div className='logo-container'>
        <img src={LOGO_URL} alt='Logo' />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className='login-btn'
            onClick={() => {
              setBtnName(current => (current === 'Login' ? 'Logout' : 'Login'))
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  )
}

export default Header
