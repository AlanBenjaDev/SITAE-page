'use client'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

export const Connectivity = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
      
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative"
        >
          <div className="absolute -inset-10 bg-[#10b981]/5 blur-[100px] rounded-full" />
          <div className="bg-[#0f172a] border border-[#1e293b] p-8 rounded-3xl relative">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-[#10b981] animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Network Protocol Status</span>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-[#020617] rounded-xl border border-white/5">
                <Icon icon="mdi:wifi" className="text-[#10b981] text-2xl" />
                <div>
                  <h4 className="text-white text-xs font-bold uppercase">Modo Online</h4>
                  <p className="text-slate-500 text-[10px]">Sincronización vía Red Institucional</p>
                </div>
              </div>

              <div className="flex justify-center py-2">
                <Icon icon="mdi:chevron-double-down" className="text-slate-700 text-xl" />
              </div>

              <div className="flex items-center gap-4 p-4 bg-[#10b981]/10 rounded-xl border border-[#10b981]/30">
                <Icon icon="mdi:access-point-network" className="text-[#10b981] text-2xl" />
                <div>
                  <h4 className="text-[#10b981] text-xs font-bold uppercase">Fail-Safe AP Mode</h4>
                  <p className="text-[#10b981]/70 text-[10px]">Web Server Local Activo (admin123)</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

  
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
            Conectividad <span className="text-[#10b981]">Resiliente</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            El SITAE está diseñado para la infraestructura escolar real. Si la red Wi-Fi del establecimiento falla, el sistema despliega automáticamente su propio punto de acceso.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-slate-300 text-sm">
              <Icon icon="mdi:check-circle" className="text-[#10b981] mt-1" />
              <span><strong>Gestión Offline:</strong> Acceso total a horarios sin internet.</span>
            </li>
            <li className="flex items-start gap-3 text-slate-300 text-sm">
              <Icon icon="mdi:check-circle" className="text-[#10b981] mt-1" />
              <span><strong>Auto-Recuperación:</strong> Reconexión automática al detectar señal estable.</span>
            </li>
          </ul>
        </motion.div>

      </div>
    </section>
  )
}