import logoDevlink from '../assets/images/logo-devlink.jpeg'
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-logo">
          <img src={logoDevlink} alt="DevLink Logo" className="logo-img" />
          <span className="logo-text">DEVLINK</span>
        </div>
        <nav className="footer-nav">
          <a href="#home">Home</a>
          <a href="#projetos">Projetos</a>
          <a href="#membros">Membros</a>
          <a href="#contato">Contato</a>
        </nav>
        <div className="footer-socials">
          <a href="#" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://www.instagram.com/lacc_devlink/" className="social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://github.com/LACC-DEVLINK" className="social-icon" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 DevLink - Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
