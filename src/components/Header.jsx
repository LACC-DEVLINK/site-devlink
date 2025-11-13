import { useState } from 'react'
import logoDevlink from '../assets/images/logo-devlink.jpeg'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      {/* Overlay para fechar menu ao clicar fora */}
      {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
      
      <header className="header">
        <div className="container">
          <div className="logo">
            <Link to="/" onClick={closeMenu}>
              <img src={logoDevlink} alt="DevLink Logo" className="logo-img" />
            </Link>
            <Link to="/" style={{ textDecoration: 'none' }} onClick={closeMenu}>
              <span className="logo-text">DEVLINK</span>
            </Link>
          </div>
          
          {/* Menu Hamburguer */}
          <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Menu">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Navegação */}
          <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
            <Link to="/" onClick={closeMenu}>Home</Link>
            <a href="#projetos" onClick={closeMenu}>Projetos</a>
            <Link to="/membros" onClick={closeMenu}>Membros</Link>
            <a href="#sobre" onClick={closeMenu}>Sobre Nós</a>
            <Link to="/contato" onClick={closeMenu}>Contato</Link>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
