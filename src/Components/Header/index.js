import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie';
import { Button } from 'antd';
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <> 
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/">
             <img
              className="website-logo"
              src="https://firebasestorage.googleapis.com/v0/b/me-portal.appspot.com/o/Miraclelogo%2Fmiracle-logo-dark.jpg?alt=media&token=256799a5-4526-4428-a67b-f796da6cdd56"
              alt="website logo"
            /> *
            <h1>Welcome to Resource Mangement </h1>
          </Link>
          <button type="button" className="nav-mobile-btn">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="nav-bar-image"
              onClick={onClickLogout}
            />
          </button>
        </div>
        <div className="nav-bar-large-container">
          <Link to="/">
             <img
              className="website-logo"
              src="https://firebasestorage.googleapis.com/v0/b/me-portal.appspot.com/o/Miraclelogo%2Fmiracle-logo-dark.jpg?alt=media&token=256799a5-4526-4428-a67b-f796da6cdd56"
              alt="website logo"
            /> 
          </Link>
         
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/employeeSearch" className="nav-link">
               Employee Search
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/trainingStatus" className="nav-link">
                Training
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/messagebox" className="nav-link">
                MessageBox
              </Link>
            </li>
            {/* <li className="nav-menu-item">
              <Link to="/messagebox" className="nav-link">
                Add New Employee
              </Link>
            </li> */}
          </ul>
          <Button
            type="primary"
            // className="logout-desktop-btn"
            onClick={onClickLogout}
          >
            Logout
          </Button>
        </div>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <Link to="/" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                alt="nav home"
                className="nav-bar-image"
              />
            </Link>
          </li>

          <li className="nav-menu-item-mobile">
            <Link to="/products" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                alt="nav products"
                className="nav-bar-image"
              />
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <Link to="/cart" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                alt="nav cart"
                className="nav-bar-image"
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </>
  )
  
}

export default withRouter(Header)
