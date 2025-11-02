import logoDevlink from '../assets/images/logo-devlink.jpeg'

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
          <a href="#" className="social-icon">LinkedIn</a>
          <a href="#" className="social-icon">Instagram</a>
          <a href="#" className="social-icon">GitHub</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 DevLink - Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
