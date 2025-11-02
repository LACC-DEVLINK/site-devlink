import './App.css'
import logoDevlink from '/logo-devlink.jpeg'

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src={logoDevlink} alt="DevLink Logo" className="logo-img" />
            <span className="logo-text">DEVLINK</span>
          </div>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#projetos">Projetos</a>
            <a href="#membros">Membros</a>
            <a href="#sobre">Sobre Nós</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Sobre a DevLink</h1>
            <p className="hero-text">
              A DevLink é a Liga Acadêmica de Ciência da Computação dedicada a promover inovação, aprendizado e integração entre estudantes apaixonados por tecnologia. Buscamos desenvolver projetos práticos, realizar eventos enriquecedores e fortalecem o conhecimento prático de nossos membros.
            </p>
          </div>
          <div className="hero-image">
            <img src={logoDevlink} alt="DevLink Robot" className="robot-illustration-img" />
          </div>
        </div>
      </section>

      {/* Nossa Jornada */}
      <section className="journey">
        <div className="container">
          <h2 className="section-title">Nossa Jornada</h2>
          <p className="section-subtitle">[Substituir com um resumo sobre a origem e propósito da liga]</p>
        </div>
      </section>

      {/* O Que Fazemos & Parcerias */}
      <section className="what-we-do">
        <div className="container">
          <div className="what-we-do-content">
            <div className="section-header">
              <h2 className="section-title">O Que Fazemos</h2>
            </div>
            <div className="cards-grid">
              <div className="card">
                <div className="card-icon">💻</div>
                <h3>Desenvolvimento de Software</h3>
              </div>
              <div className="card">
                <div className="card-icon">🤖</div>
                <h3>Inteligência Artificial</h3>
              </div>
              <div className="card">
                <div className="card-icon">🎨</div>
                <h3>Design e UX/UI</h3>
              </div>
              <div className="card">
                <div className="card-icon">📱</div>
                <h3>Aplicações mobile</h3>
              </div>
            </div>
          </div>

          <div className="partnerships">
            <div className="partnerships-content">
              <h2 className="section-title">Parcerias</h2>
              <div className="partnership-item">
                <div className="partnership-icon">🎖️</div>
                <div className="partnership-text">
                  <h3>Parceria estratégica com o Exército Brasileiro</h3>
                  <p>Desenvolvimento do sistema Check-in.</p>
                </div>
              </div>
              <div className="partnership-placeholder">
                <p>Em breve</p>
              </div>
              <div className="partnership-placeholder">
                <p>Em breve</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="team">
        <div className="container">
          <h2 className="section-title">Nossa equipe</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo">👤</div>
              <h3 className="member-name">Rafael Góes</h3>
              <p className="member-role">Presidente</p>
              <div className="member-socials">
                <a href="#" className="social-icon">GitHub</a>
                <a href="#" className="social-icon">LinkedIn</a>
              </div>
            </div>
            <div className="team-member">
              <div className="member-photo">👤</div>
              <h3 className="member-name">Luan Levi</h3>
              <p className="member-role">Vice-Presidente</p>
              <div className="member-socials">
                <a href="#" className="social-icon">GitHub</a>
                <a href="#" className="social-icon">LinkedIn</a>
              </div>
            </div>
            <div className="team-member">
              <div className="member-photo">👤</div>
              <h3 className="member-name">Alberto Monteiro</h3>
              <p className="member-role">Diretor Acadêmico</p>
              <div className="member-socials">
                <a href="#" className="social-icon">GitHub</a>
                <a href="#" className="social-icon">LinkedIn</a>
              </div>
            </div>
          </div>
          <button className="btn-members">Ver todos os membros</button>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  )
}

export default App
