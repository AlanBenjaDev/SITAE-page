"use client";
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const Card = ({ icon, title, desc, index }: { icon: string, title: string, desc: string, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="group p-8 rounded-3xl bg-[#0f172a]/40 border border-[#1e293b] hover:border-[#10b981]/50 transition-all duration-500"
  >
    <div className="w-14 h-14 rounded-2xl bg-[#020617] border border-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
      <Icon icon={icon} className="text-3xl text-[#10b981]" />
    </div>
    
    <h3 className="text-sm font-black text-white mb-4 uppercase tracking-[0.2em]">
      {title}
    </h3>
    
    <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors">
      {desc}
    </p>
  </motion.div>
);

export const Fundamentals = () => (

  <section id="fundamentos" className="w-full py-24 bg-[#020617] border-y border-white/5">
    
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-8">
        <Card 
          index={0}
          icon="material-symbols:security" 
          title="Problemática" 
          desc="Eliminamos la vulnerabilidad del control manual y la dependencia de personal para alertas críticas." 
        />
        <Card 
          index={1}
          icon="mdi:database-check" 
          title="Solución IoT" 
          desc="Automatización inteligente de cronogramas industriales y escolares con protocolos de respaldo integrados." 
        />
        <Card 
          index={2}
          icon="ri:wifi-off-line" 
          title="Diferencial" 
          desc="Infraestructura No-Cloud. Operatividad total en redes locales sin exposición a fallas de internet externo." 
        />
      </div>
    </div>
  </section>
);