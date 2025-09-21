
import React from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

const CTA: React.FC = () => {
  return (
    <section className="bg-blue-600 text-white">
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-extrabold mb-4">¿Listo para Reparar tu Silla?</h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          No esperes más para volver a disfrutar de la comodidad. ¡Contáctanos y agenda tu servicio express hoy mismo!
        </p>
        <a 
          href="https://wa.me/573028611668" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center space-x-3 bg-white text-blue-600 font-bold px-10 py-4 rounded-full shadow-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
        >
          <WhatsAppIcon className="w-7 h-7 text-green-500" />
          <span>¡REPARA HOY MISMO! 🛵</span>
        </a>
      </div>
    </section>
  );
};

export default CTA;
