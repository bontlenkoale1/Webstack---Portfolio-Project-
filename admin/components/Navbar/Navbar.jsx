import './Navbar.css'
import logo from "C:/Users/Mamokete/OneDrive/e-commerce/admin/src/assets/logo.png"
import navProfile from "C:/Users/Mamokete/OneDrive/e-commerce/admin/src/assets/nav-profile.svg"
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="" className="logo" />
      
             <p>NOVASHOP</p>
             <p>Admin Panel</p>
             <img src={navProfile} alt="" className="nav-profile" />   
    </div>
  )
}

export default Navbar
