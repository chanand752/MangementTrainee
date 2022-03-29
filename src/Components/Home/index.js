import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="home-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/home-blog-img.png"
      alt="home"
      className="home-img"
    />
    <h1 className="home-heading">Home</h1>
  </div>
    </>
  )
}

export default Home
