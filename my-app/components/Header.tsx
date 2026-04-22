"use client";
import { motion } from 'framer-motion';

export const Header = () => (
  <header className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10">
    <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="text-2xl font-black tracking-tighter text-white">
        SITAE<span className="text-[#FF0000]">.</span>
      </div>
      <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium">
        {['Inicios', 'Fundamentos', 'Guía', 'XIDMET'].map((item) => (
          <motion.a 
            key={item}
            href={`#${item.toLowerCase()}`}
            whileHover={{ scale: 1.05, color: '#FF0000' }}
            className="hover:text-white transition-colors"
          >
            {item}
          </motion.a>
        ))}
      </div>
    </nav>
  </header>
);