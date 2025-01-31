import './Nosotros.css';

export default function Nosotros() {
  return (
    <div className="nosotros-container">
      <section className="nosotros-content">
        <div className="nosotros-image">
          <img src="/about_us.svg" alt="Sobre Nosotros" />
        </div>
        <div className="nosotros-text">
          <header className="nosotros-header">
            <h1>Sobre Nosotros</h1>
          </header>
          <p>
            En Grano Maestro, somos apasionados por el café. Desde nuestros humildes comienzos, nos hemos dedicado a seleccionar los mejores granos de café para ofrecerte una experiencia única en cada taza.
          </p>
          <p>
            Nuestro equipo está compuesto por expertos en café que trabajan incansablemente para asegurar que cada grano cumpla con nuestros altos estándares de calidad.
          </p>
          <p>
            Gracias por ser parte de nuestra comunidad de amantes del café. ¡Esperamos que disfrutes de cada sorbo!
          </p>
        </div>
      </section>
    </div>
  );
}