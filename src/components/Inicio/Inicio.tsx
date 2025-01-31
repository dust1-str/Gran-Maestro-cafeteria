import './Inicio.css';

export default function Inicio() {
  return (
    <div className="inicio-container">
      <div className="inicio-image-container">
        <img src="/cafeteria.svg" alt="Café de Granos" className="inicio-image" />
        <div className="inicio-text">
          <header className="inicio-header">
            <h1>Bienvenidos a Grano Maestro</h1>
            <p>El mejor café de granos seleccionados para ti</p>
          </header>
        </div>
      </div>
    </div>
  );
}