import React from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { InstagramIcon } from './icons/InstagramIcon';
import { ChairIcon } from './icons/ChairIcon';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <ChairIcon className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold text-white">ReparaSillas Cali</span>
            </div>
            <p className="text-gray-400">Expertos en la reparación y mantenimiento de sillas de oficina en Cali, Colombia.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">Contacto Rápido</h4>
            <ul className="space-y-2">
              <li><a href="https://wa.me/573028611668" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp 1: 302 861 1668</a></li>
              <li><a href="https://wa.me/573024688532" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp 2: 302 468 8532</a></li>
              <li className="text-gray-400">Servicio a domicilio en Cali</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">Síguenos</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://wa.me/573028611668" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><WhatsAppIcon className="w-7 h-7" /></a>
              <a href="https://www.instagram.com/reparaciondesillaserg" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><InstagramIcon className="w-7 h-7" /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Reparación de Sillas de Oficina Cali. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;