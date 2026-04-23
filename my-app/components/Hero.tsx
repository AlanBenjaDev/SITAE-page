"use client";
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import Link from 'next/link'; // Importante para la navegación interna de Next.js

export const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center bg-[#020617] overflow-hidden border-b border-white/5">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#10b981]/10 opacity-20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-6 max-w-7xl mx-auto"
      >
   
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="bg-[#10b981]/10 text-[#10b981] px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.3em] uppercase border border-[#10b981]/20">
            Protocolo Autónomo // No-Cloud
          </span>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-8 leading-none">
          SITAE<span className="bg-gradient-to-r from-[#10b981] to-[#0ea5e9] bg-clip-text text-transparent">.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl mb-12 leading-relaxed font-medium">
          Sincronización de alta precisión para <span className="text-white">entornos educativos</span>. 
          Gestión local absoluta que garantiza operatividad total <span className="text-[#34d399]">sin dependencia de Internet</span>.
        </p>

      
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#configurar"
            className="bg-[#10b981] text-[#020617] px-10 py-4 rounded-full font-black uppercase text-[11px] tracking-widest hover:bg-[#34d399] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all w-full md:w-auto"
          >
            Configurar Memoria
          </motion.a>

          
          <Link href="/Demo">
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              whileTap={{ scale: 0.98 }}
              className="border border-white/10 text-white px-10 py-4 rounded-full font-black uppercase text-[11px] tracking-widest transition-all w-full md:w-auto flex items-center justify-center gap-2"
            >
              <Icon icon="mdi:play-circle-outline" className="text-lg text-[#10b981]" />
              Probar Demo
            </motion.button>
          </Link>
          
          <div className="flex items-center gap-3 px-6 py-4 text-[10px] font-mono text-slate-500 uppercase border-l border-white/10 ml-0 md:ml-4 tracking-[0.2em]">
            <Icon icon="mdi:wifi-off" className="text-[#10b981] text-2xl" />
            Red Local Detectada
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-10 flex flex-col items-center gap-4 opacity-50">
        <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
          <span className="text-[20px] font-mono text-slate-300 uppercase tracking-widest">
            Gateway: <span className="text-[#10b981]">http://timbre.local</span>
          </span>
        </div>
        <Icon icon="mdi:chevron-double-down" className="text-[#10b981] text-2xl animate-pulse" />
      </div>

      <div className="absolute bottom-10 right-10 hidden lg:block">
        <p className="text-slate-800 font-mono text-[9px] uppercase tracking-[0.5em] [writing-mode:vertical-lr]">
          SITAE v2.4 // HARDWARE ENCRYPTION // XIDMET
        </p>
      </div>
    </section>
  );
};