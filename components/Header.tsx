import React from 'react';
import { OfficeChairIcon } from './icons/OfficeChairIcon';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <OfficeChairIcon className="w-8 h-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-800 tracking-tight">Reparación Sillas de Oficina Cali</span>
        </div>
        <a 
          href="https://wa.me/573024688532" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden sm:flex items-center space-x-2 bg-green-500 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300"
        >
          <WhatsAppIcon className="w-5 h-5" />
          <span>Cotiza con Nosotros</span>
        </a>
      </div>
    </header>
  );
};

export default Header;