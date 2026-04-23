"use client";
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const steps = [
  { id: '01', icon: 'f7:cable', title: 'Conexión Física', text: 'Vincular el hardware mediante cable Tipo-C al puerto de alimentación principal.' },
  { id: '02', icon: 'mdi:wifi-settings', title: 'Portal de Configuración', text: 'Buscar la red XMET_Config_Portal. Credenciales: admin123.' },
  { id: '03', icon: 'material-symbols:settings-ethernet', title: 'Parámetros de Red', text: 'Ajustes avanzados para asignación de IP estática o dinámica.' },
  { id: '04', icon: 'mdi:router-wireless', title: 'Sincronización LAN', text: 'Vincular el SITAE con la red local disponible en la zona de cobertura.' },
  { id: '05', icon: 'mdi:lan-check', title: 'Acceso Final', text: 'Conectate a la misma red y accedé al panel de control centralizado.' },
];

export const InstallationGuide = () => (
  /* SECCIÓN: Fondo total oscuro para coherencia visual */
  <section id="guía" className="w-full py-24 bg-[#020617] border-t border-white/5">
    
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-[#10b981] text-[10px] font-black tracking-[0.3em] uppercase">Deployment</span>
        <h2 className="text-4xl font-bold text-white tracking-tighter uppercase mt-2">Guía de Configuración</h2>
      </div>

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
            className="flex items-center gap-6 p-6 bg-[#0f172a]/40 border border-white/5 rounded-2xl group hover:border-[#10b981]/30 transition-all duration-300"
          >
            <span className="text-[#10b981] font-mono text-lg font-black opacity-20 group-hover:opacity-100 transition-opacity">
              {step.id}
            </span>
            
            <div className="p-3 rounded-xl bg-[#020617] border border-white/5 text-[#10b981]">
              <Icon icon={step.icon} className="text-2xl" />
            </div>

            <div className="flex-grow">
              <h4 className="font-bold text-white uppercase text-sm tracking-widest">{step.title}</h4>
              <p className="text-slate-500 text-xs mt-1">{step.text}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Box de Acción Final estilo Glassmorphism */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-16 p-1 bg-gradient-to-r from-[#10b981]/20 to-[#0ea5e9]/20 rounded-3xl"
      >
        <div className="bg-[#020617] rounded-[22px] p-12 text-center border border-white/5">
          <p className="text-slate-400 text-sm mb-6 font-mono uppercase tracking-[0.2em]">Punto de acceso detectado</p>
          <a 
            href="http://sitae.local" 
            target="_blank" 
            className="inline-flex items-center gap-3 bg-[#10b981] text-[#020617] px-10 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-[#34d399] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all group"
          >
            <Icon icon="mdi:bell-ring" className="text-xl group-hover:animate-bounce" />
            Ingresar a SITAE.LOCAL
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);