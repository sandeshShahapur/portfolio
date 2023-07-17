import { Link, useLocation } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import {
  faDiscord,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import Globe from '../Globe'

const Sidebar = () => {
  const location = useLocation()
  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="Sandesh" />
      </Link>

      <nav>
        {/*alternate: className={(navData) => (navData.isActive ? 'active' : '')}{' '}
         */}
        <Link className={isActive('/')} to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </Link>
        {/*implement alternate prop for applying style of hover text*/}
        <Link className={isActive('/about')} id="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </Link>
        <Link className={isActive('/contact')} id="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </Link>
      </nav>

      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/sandeshshahapur/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.discordapp.com/users/361645639895089153"
          >
            <FontAwesomeIcon icon={faDiscord} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/sandeshShahapur"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://leetcode.com/sandeshShahapur/"
          >
            <Globe />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
