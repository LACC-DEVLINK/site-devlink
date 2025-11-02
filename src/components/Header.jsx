import logoDevlink from '../assets/images/logo-devlink.jpeg'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logoDevlink} alt="DevLink Logo" className="logo-img" />
          </Link>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <span className="logo-text">DEVLINK</span>
          </Link>
        </div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <a href="#projetos">Projetos</a>
          <Link to="/membros">Membros</Link>
          <a href="#sobre">Sobre Nós</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
