"use client";
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center bg-black overflow-hidden border-b border-white/5">
      {/* Efecto de luz roja de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF0000] opacity-5 blur-[140px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-6"
      >
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="bg-[#FF0000]/10 text-[#FF0000] px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase border border-[#FF0000]/20">
            Funciona sin Internet
          </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-6">
          SITAE<span className="text-[#FF0000]">.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
          El sistema de alertas que <span className="text-white font-bold">siempre responde</span>. 
          Control total desde tu red local, sin depender de cables externos ni servidores en la nube. 
          <span className="text-white"> Privacidad absoluta y respuesta inmediata.</span>
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#guía"
            className="bg-white text-black px-10 py-4 font-black uppercase text-sm tracking-widest hover:bg-[#FF0000] hover:text-white transition-colors"
          >
            Configurar ahora
          </motion.a>
          
          <div className="flex items-center gap-3 px-6 py-4 text-xs font-mono text-gray-500 uppercase border-l border-white/10 ml-0 md:ml-4">
            <Icon icon="mdi:wifi-off" className="text-[#FF0000] text-xl" />
            Sistema Autónomo
          </div>
        </div>
      </motion.div>

      {/* Acceso directo */}
      <div className="absolute bottom-10 flex flex-col items-center gap-2">
        <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
          Acceso directo: http://timbre.local
        </span>
        <Icon icon="mdi:chevron-double-down" className="text-white/20 text-2xl animate-bounce" />
      </div>
    </section>
  );
};