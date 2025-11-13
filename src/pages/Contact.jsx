import '../App.css'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'

function Contact() {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Entre em Contato</h1>
            <p className="hero-text">
              Estamos sempre abertos para novas parcerias, colaborações e oportunidades. 
              Entre em contato conosco e vamos juntos construir o futuro da tecnologia!
            </p>
          </div>
          <div className="hero-image">
            <div className="contact-icons">
              <div className="hero-icon"><FaEnvelope /></div>
              <div className="hero-icon"><FaPhone /></div>
              <div className="hero-icon"><FaMapMarkerAlt /></div>
              <div className="hero-icon"><FaLinkedin /></div>
              <div className="hero-icon"><FaInstagram /></div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider">
        <div className="container">
          <div className="divider-line"></div>
        </div>
      </div>

      {/* Contact Information & Form */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            {/* Contact Info */}
            <div className="contact-info">
              <h2 className="section-title">Informações de Contato</h2>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-details">
                  <h3>E-mail</h3>
                  <p>develinkcc@gmail.com</p>
                  <a href="develinkcc@gmail.com" className="contact-link">
                    Enviar e-mail
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-details">
                  <h3>Localização</h3>
                  <p>Parque Shopping Belém</p>
                  <p>Parque Verde, Belém - PA</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div className="contact-details">
                  <h3>Telefone</h3>
                  <p>+55 (91) 98608-3776</p>
                  <a href="tel:+5591986083776" className="contact-link">
                    Ligar agora
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="social-section">
                <h3>Siga-nos nas redes sociais</h3>
                <div className="social-links">
                  <a href="https://github.com/LACC-DEVLINK" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                  <a href="https://instagram.com/lacc_devlink" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaInstagram />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <h2 className="section-title">Mande sua Mensagem</h2>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Nome completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    placeholder="Seu nome completo"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    placeholder="seu.email@exemplo.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Telefone (opcional)</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    placeholder="+55 (91) 99999-9999"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Assunto</label>
                  <select id="subject" name="subject" required>
                    <option value="">Selecione um assunto</option>
                    <option value="parceria">Parceria</option>
                    <option value="projeto">Projeto</option>
                    <option value="evento">Evento</option>
                    <option value="duvida">Dúvida</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mensagem</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required 
                    rows="6"
                    placeholder="Descreva sua mensagem, ideia ou proposta..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-submit">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider">
        <div className="container">
          <div className="divider-line"></div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Perguntas Frequentes</h2>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Como posso me tornar membro da DevLink?</h3>
              <p>Fique atento aos nossos processos seletivos que são divulgados nas nossas redes sociais e no site da universidade. Geralmente realizamos seleções no início de cada semestre.</p>
            </div>

            <div className="faq-item">
              <h3>Vocês oferecem estágios ou oportunidades de trabalho?</h3>
              <p>Sim! Compartilhamos oportunidades de estágios, empregos e projetos freelancer com nossos membros. Também desenvolvemos projetos internos que servem como experiência prática.</p>
            </div>

            <div className="faq-item">
              <h3>Como posso propor uma parceria com a DevLink?</h3>
              <p>Entre em contato conosco através do formulário acima ou pelo nosso e-mail. Estamos sempre abertos a parcerias que agreguem valor tanto para a liga quanto para nossos parceiros.</p>
            </div>

            <div className="faq-item">
              <h3>Vocês desenvolvem projetos para empresas?</h3>
              <p>Sim! Desenvolvemos soluções tecnológicas personalizadas para empresas e instituições. Entre em contato para discutirmos seu projeto.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
