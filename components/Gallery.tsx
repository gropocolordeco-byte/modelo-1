import React from 'react';
import { InstagramIcon } from './icons/InstagramIcon';

const Gallery: React.FC = () => {
  const images = [
    { src: "https://images.unsplash.com/photo-1502404679419-76c8a22026e6?q=80&w=600&auto=format&fit=crop", alt: "Oficina minimalista y elegante con una gran ventana y vistas a la ciudad" },
    { src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop", alt: "Espacio de reunión colaborativo con sillas de diseño moderno y una mesa de madera" },
    { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop", alt: "Equipo de trabajo discutiendo ideas frente a una pizarra en una sala de reuniones luminosa" },
    { src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop", alt: "Oficina de planta abierta con escritorios compartidos, portátiles y un ambiente de trabajo dinámico" },
    { src: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=600&auto=format&fit=crop", alt: "Vista cenital de una elegante zona de descanso en una oficina con sofás y mesas de centro" },
    { src: "https://images.unsplash.com/photo-1583321500424-94b2233b8a92?q=80&w=600&auto=format&fit=crop", alt: "Primer plano de un puesto de trabajo moderno con una silla ergonómica y un escritorio ordenado" },
    { src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=600&auto=format&fit=crop", alt: "Interior de una oficina limpia y luminosa con plantas, luz natural y mobiliario blanco" },
    { src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop", alt: "Sala de juntas corporativa profesional con una larga mesa y sillas ejecutivas" },
    { src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600&auto=format&fit=crop", alt: "Jóvenes profesionales colaborando con tecnología en un espacio de trabajo moderno e informal" },
    { src: "https://images.unsplash.com/photo-1600880292210-f7617b11c3a7?q=80&w=600&auto=format&fit=crop", alt: "Pequeño grupo de personas en una discusión informal en una moderna área de descanso de la oficina" },
    { src: "https://images.unsplash.com/photo-1604328698692-f76ea9498e7b?q=80&w=600&auto=format&fit=crop", alt: "Configuración de oficina en casa con una silla moderna, escritorio y decoración elegante" },
    { src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=600&auto=format&fit=crop", alt: "Espacio de trabajo creativo con múltiples pantallas, mostrando un entorno de alta productividad" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">Mira Nuestros Trabajos</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Transformamos sillas desgastadas en piezas funcionales y estéticas. ¡Como nuevas!</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg group aspect-w-1 aspect-h-1">
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/reparaciondesillaserg" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <InstagramIcon className="w-6 h-6" />
            <span>Síguenos en Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;