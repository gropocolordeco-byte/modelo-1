import React from 'react';
import { CheckCircleIcon } from './icons/CheckCircleIcon';

const WhyChooseUs: React.FC = () => {
  const benefits = [
    { text: 'Servicio Express Garantizado' },
    { text: 'Repuestos 100% Originales y Duraderos' },
    { text: 'Expertos en Sillas Ergonómicas' },
    { text: 'Atención Personalizada y a Domicilio' },
    { text: 'Garantía Total Sobre Nuestro Trabajo' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">¿Por Qué Confiar en Nosotros?</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Con años de experiencia, nos dedicamos a restaurar la comodidad y funcionalidad de tus sillas. No solo reparamos, ¡revitalizamos tu espacio de trabajo!
          </p>
          <ul className="space-y-4 inline-block text-left">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center text-lg">
                <CheckCircleIcon className="w-7 h-7 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{benefit.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;