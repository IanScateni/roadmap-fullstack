import { useEffect, useState } from "react"
import { navLinks } from "../constants/index.js"

const NavBar = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(true);
    }

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          Ian Scateni
        <br />
        <span className="branding-slogan">Arquitectura, Código y Soluciones que Escalan</span>
        </a> 

        <nav className="desktop">
          <ul>
            {navLinks.map(( { link, name }) =>(
              <li className="group" key={name}>
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contáctame</span>
          </div>
        </a>

      </div>
    </header>
  )
}

export default NavBar