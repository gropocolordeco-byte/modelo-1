
import React from 'react';
import { WrenchScrewdriverIcon } from './icons/WrenchScrewdriverIcon';
import { UpholsteryIcon } from './icons/UpholsteryIcon';
import { TruckIcon } from './icons/TruckIcon';
import { InstagramIcon } from './icons/InstagramIcon';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out border border-gray-100">
      <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <WrenchScrewdriverIcon className="w-8 h-8" />,
      title: 'Repuestos Originales',
      description: 'Cambiamos brazos, rodachines, pistones de gas, y mecanismos reclinables con repuestos de alta calidad.'
    },
    {
      icon: <UpholsteryIcon className="w-8 h-8" />,
      title: 'Tapizado y Mantenimiento',
      description: 'Renovamos la apariencia de tu silla con tapicería nueva y realizamos un mantenimiento completo para su óptimo funcionamiento.'
    },
    {
      icon: <TruckIcon className="w-8 h-8" />,
      title: 'Servicio a Domicilio',
      description: 'Vamos hasta tu casa u oficina en Cali. También realizamos envíos de repuestos a nivel nacional.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">Nuestros Servicios</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Soluciones integrales para todo tipo de sillas de oficina, gerenciales y ergonómicas.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
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
            <span>Ver Trabajos en Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;