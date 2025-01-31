import './TiposCafe.css';

export default function TiposCafe() {
  const cafes = [
    { nombre: 'Arabica', descripcion: 'Disfruta de un café con notas dulces y afrutadas, ideal para quienes buscan una experiencia suave pero llena de sabor. Perfecto para los amantes del café clásico y elegante.', imagen: '/arabic.png' },
    { nombre: 'Liberica', descripcion: 'Un grano único con un aroma floral y un perfil de sabor audaz y afrutado. Una elección excepcional para los exploradores del mundo del café.', imagen: '/liberic.png' },
    { nombre: 'Robusta', descripcion: 'Con un cuerpo rico y una dosis extra de cafeína, este grano es perfecto para quienes buscan un sabor fuerte y una energía imbatible.', imagen: '/robust.png' },
    { nombre: 'Excelsa', descripcion: 'Un café intrigante con notas afrutadas y ácidas, que aporta profundidad y un toque exótico a cada taza. Ideal para quienes desean algo fuera de lo común.', imagen: '/excelsa.png' },
  ];

  return (
    <div className="tipos-cafe-container">
      <header className="tipos-cafe-header">
        <h1>Tipos de Cafés</h1>
      </header>
      <section className="tipos-cafe-content">
        {cafes.map((cafe, index) => (
          <div key={index} className="cafe-card">
            <img src={cafe.imagen} alt={cafe.nombre} className="cafe-image" />
            <h2>{cafe.nombre}</h2>
            <p>{cafe.descripcion}</p>
          </div>
        ))}
      </section>
    </div>
  );
}