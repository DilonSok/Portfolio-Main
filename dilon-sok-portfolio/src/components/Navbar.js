import '../styles/Navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import homeImage from '../images/HomePageImage.png';
import resumeFile from '../files/DilonSok_Resume.pdf'
function Navbar() {
  return (
    <div className="navbar">
        <div className='navbar-leftside'>
            <NavLink to='/home'><img className='home-image' src={homeImage} alt="Home Image"></img></NavLink>
        </div>
        <div className='navbar-rightside'>
            <ul className='navlinks'>
                <li><NavLink to='/home'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/projects'>Projects</NavLink></li>
                <li><NavLink to='/career'>Career</NavLink></li>
                <li><a href={resumeFile} target="_blank">Resume</a></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </div>
    </div>
  );
}

export default Navbar;
