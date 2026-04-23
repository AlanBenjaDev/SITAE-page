"use client";
import { motion } from 'framer-motion';

export const Header = () => (
  
  <header className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-white/5">
    <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      
      
      <div className="text-2xl font-black tracking-tighter text-white">
        SITAE<span className="text-[#10b981]">.</span>
      </div>

      <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.3em] font-black">
        {['Inicio', 'Fundamentos', 'Guía'].map((item) => (
          <motion.a 
            key={item}
            href={`#${item.toLowerCase()}`}
            whileHover={{ y: -2 }}
            className="text-slate-400 hover:text-[#10b981] transition-all duration-300"
          >
            {item}
          </motion.a>
        ))}
        
        
        <motion.a 
          href="#nosotros" // O la URL de tu landing principal
          whileHover={{ scale: 1.05 }}
          className="text-[#10b981] border border-[#10b981]/30 px-4 py-1 rounded-full bg-[#10b981]/5 hover:bg-[#10b981] hover:text-[#020617] transition-all duration-500"
        >
          XIDMET
        </motion.a>
      </div>

     
      <div className="md:hidden text-[#10b981]">
        <div className="w-6 h-0.5 bg-current mb-1.5"></div>
        <div className="w-6 h-0.5 bg-current"></div>
      </div>
    </nav>
  </header>
);