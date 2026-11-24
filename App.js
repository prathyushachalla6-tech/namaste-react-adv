import React from 'react'
import ReactDOM from 'react-dom/client'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img
          src='https://img.magnific.com/free-vector/hand-drawn-healthy-food-logo-design_23-2149669984.jpg?semt=ais_hybrid&w=740&q=80'
          alt='todo'
        />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const styleCard = {
  backgroundColor: '#f0f0f0'
}
const RestaurantCard = () => {
  return (
    <div className='res-card' style={styleCard}>
      <h3>Pista House</h3>
    </div>
  )
}
const Body = () => {
  return (
    <div className='body'>
      <div className='search'>Search</div>
      <div className='res-container'>
        <RestaurantCard />
      </div>
    </div>
  )
}
const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<AppLayout />)
