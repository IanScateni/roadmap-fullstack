import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terminos y condiciones</p>
          <a href="#" target="_blank" rel="noopener noreferrer"></a>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a key={index} className="icon" target="_blank" href={socialImg.url}>
              <img src={socialImg.imgPath} alt={socialImg.name} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Ian Scateni. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;