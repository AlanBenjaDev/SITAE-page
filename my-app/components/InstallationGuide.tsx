"use client";
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const steps = [
  { id: '01', icon: 'f7:cable', title: 'Cable Tipo-C', text: 'Conexión física al puerto principal.' },
  { id: '02', icon: 'mdi:wifi-settings', title: 'Buscar en Wifi XMET_Config_Portal', text: 'Enlace al portal de configuración usando admin123 como contraseña.' },
  { id: '03', icon: 'material-symbols:settings-ethernet', title: 'Más opciones', text: 'Ajustes de red avanzada.' },
  { id: '04', icon: 'mdi:router-wireless', title: 'Wi-Fi Settings', text: 'Sincronizá con una red que tenga disponible en tu zona' },
  { id: '05', icon: 'mdi:lan-check', title: 'Acceso Local', text: 'Accedé conectandote a la misma red que conectaste el SITAE' },
];

export const InstallationGuide = () => (
  <section id="guía" className="py-24 px-6 max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold mb-16 text-center uppercase tracking-widest">Guía de Configuración</h2>
    <motion.div 
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
      className="space-y-4"
    >
      {steps.map((step) => (
        <motion.div 
          key={step.id}
          variants={{ initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 } }}
          className="flex items-center gap-6 p-6 bg-[#111] border border-white/5 rounded group"
        >
          <span className="text-[#FF0000] font-mono font-bold opacity-40 group-hover:opacity-100">{step.id}</span>
          <Icon icon={step.icon} className="text-2xl text-white" />
          <div>
            <h4 className="font-bold text-white uppercase text-sm">{step.title}</h4>
            <p className="text-gray-500 text-xs">{step.text}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>

    <div className="mt-16 p-10 bg-black border border-[#FF0000]/30 text-center">
      <a href="http://timbre.local" target="_blank" className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 font-black hover:bg-[#FF0000] hover:text-white transition-all group">
        <Icon icon="mdi:bell-ring" className="text-xl group-hover:animate-bounce" />
        ACCEDER A TIMBRE.LOCAL
      </a>
    </div>
  </section>
);