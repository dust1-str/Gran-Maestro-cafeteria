import React from 'react';
import './Contactanos.css';

export default function Contactanos() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="contactanos-container">
      <header className="contactanos-header">
        <h1>Contáctanos</h1>
      </header>
      <section className="contactanos-content">
        <form className="contactanos-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  );
}