import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative bg-cover bg-center text-white" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative container mx-auto px-6 py-32 sm:py-48 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Reparación de Sillas de Oficina
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto drop-shadow-md">
          ¡Dejamos tu silla como nueva! Ofrecemos un servicio express a domicilio en Cali para que no interrumpas tu trabajo. Calidad y garantía en cada reparación.
        </p>
      </div>
    </section>
  );
};

export default Hero;