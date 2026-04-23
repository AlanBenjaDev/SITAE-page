export const Footer = () => (
  <footer className="w-full py-12 bg-[#020617] border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      
   
      <div className="flex flex-col items-center md:items-start">
        <div className="text-white font-black text-sm tracking-tighter mb-1">
          XIDMET<span className="text-[#10b981]">.</span>
        </div>
        <p className="text-[9px] text-slate-500 uppercase tracking-[0.4em] font-bold">
          SITAE v2.4 // 2026
        </p>
      </div>

     
      <div className="text-center">
        <p className="text-[10px] text-slate-400 uppercase tracking-[0.3em] font-medium">
          © {new Date().getFullYear()} XIDMET Company.
        </p>
        <p className="text-[9px] text-[#10b981]/50 uppercase tracking-[0.2em] mt-1">
          Control Industrial & Automatización Certificada
        </p>
      </div>

    
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
        <span className="text-[9px] text-slate-500 uppercase tracking-widest font-mono">
          System Operational
        </span>
      </div>

    </div>
  </footer>
);