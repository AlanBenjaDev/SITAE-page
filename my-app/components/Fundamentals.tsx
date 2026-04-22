"use client";
import { Icon } from '@iconify/react';

const Card = ({ icon, title, desc }: { icon: string, title: string, desc: string }) => (
  <div className="p-8 border-l border-[#FF0000]/20 hover:border-[#FF0000] transition-colors bg-[#0a0a0a]">
    <Icon icon={icon} className="text-4xl text-[#FF0000] mb-6" />
    <h3 className="text-xl font-bold text-white mb-4 uppercase">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
  </div>
);

export const Fundamentals = () => (
  <section id="fundamentos" className="py-24 bg-[#0f0f0f] border-y border-white/5">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
      <Card icon="material-symbols:security" title="Problemática" desc="Elimine el control manual de alertas" />
      <Card icon="mdi:database-check" title="Solución" desc="Automatización crítica  de alertas escolares y industriales con sistemas de respaldo." />
      <Card icon="ri:wifi-off-line" title="Diferencial" desc="Operatividad Offline total. Independencia de conexión externa." />
    </div>
  </section>
);