"use client";
import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

const DemoTimbre = () => {
  const [alarmas, setAlarmas] = useState(
    Array(17).fill(null).map((_, i) => ({
      id: i,
      hora: "08:00",
      activa: false
    }))
  );

  const [timbreActivo, setTimbreActivo] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const ahora = new Date();
      const horaActual = `${ahora.getHours().toString().padStart(2, '0')}:${ahora.getMinutes().toString().padStart(2, '0')}`;
      
      const alarmaDisparada = alarmas.find(a => a.activa && a.hora === horaActual);
      
      if (alarmaDisparada && !timbreActivo && ahora.getSeconds() === 0) {
        activarTimbre();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [alarmas, timbreActivo]);

  const activarTimbre = () => {
    setTimbreActivo(true);
    setStatusMsg("TIMBRE SONANDO...");
    setTimeout(() => {
      setTimbreActivo(false);
      setStatusMsg("");
    }, 5000);
  };

  const apagarTimbre = () => {
    setTimbreActivo(false);
    setStatusMsg("Sistema desactivado correctamente");
    setTimeout(() => setStatusMsg(""), 2000);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMsg("¡Cambios guardados en memoria!");
    setTimeout(() => setStatusMsg(""), 2000);
  };

  return (
    <div className="min-h-screen bg-[#020617] p-4 flex flex-col items-center font-sans text-slate-300">
      
      {/* BOTÓN VOLVER - ESTILO XIDMET */}
      <Link href="/" className="fixed top-6 left-6 z-50">
        <button className="flex items-center gap-2 bg-[#10b981]/10 border border-[#10b981]/20 text-[#10b981] px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-[#10b981] hover:text-[#020617] transition-all duration-500 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.1)]">
          <Icon icon="mdi:arrow-left" className="text-lg" />
          Volver a la principal
        </button>
      </Link>
      
      {statusMsg && (
        <div className={`fixed top-5 z-50 p-4 rounded-2xl shadow-2xl text-white font-bold flex items-center gap-3 transition-all animate-in fade-in slide-in-from-top-4 ${
          timbreActivo ? 'bg-red-600' : 'bg-[#10b981]'
        }`}>
          <Icon icon={timbreActivo ? "mdi:bell-ring" : "mdi:check-circle"} className="text-2xl" />
          {statusMsg}
        </div>
      )}

      <div className="w-full max-w-md bg-[#0f172a] rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden border border-white/5 mt-16">
       
        <div className="bg-[#020617] p-8 text-center border-b border-white/5">
          <div className="inline-flex p-3 rounded-2xl bg-[#10b981]/10 mb-3 border border-[#10b981]/20">
            <Icon icon="mdi:router-wireless" className="text-[#10b981] text-3xl" />
          </div>
          <h1 className="text-white text-2xl font-black tracking-tight uppercase">SITAE XIDMET</h1>
          <div className="flex justify-center items-center gap-2 mt-2">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
            <p className="text-slate-500 text-[10px] uppercase font-bold tracking-[0.2em]">Hardware Online</p>
          </div>
        </div>

        <form onSubmit={handleSave} className="p-6 max-h-[50vh] overflow-y-auto custom-scrollbar bg-[#0f172a]">
          <div className="flex items-center justify-between mb-6 px-2">
            <h2 className="font-bold text-white uppercase text-xs tracking-widest">Cronograma</h2>
            <span className="text-[10px] font-bold bg-[#10b981]/10 text-[#10b981] px-2 py-1 rounded-lg border border-[#10b981]/20">17 SLOTS</span>
          </div>
          
          {alarmas.map((alarma, i) => (
            <div key={i} className="flex items-center justify-between py-3 px-2 hover:bg-white/5 rounded-xl transition-colors group">
              <div className="flex items-center gap-3">
                <span className="text-slate-600 font-black text-xs">{(i + 1).toString().padStart(2, '0')}</span>
                <input 
                  type="time" 
                  value={alarma.hora}
                  onChange={(e) => {
                    const nuevas = [...alarmas];
                    nuevas[i].hora = e.target.value;
                    setAlarmas(nuevas);
                  }}
                  className="bg-transparent text-white lg:text-lg font-bold outline-none focus:text-[#10b981] transition-colors"
                />
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={alarma.activa}
                  onChange={(e) => {
                    const nuevas = [...alarmas];
                    nuevas[i].activa = e.target.checked;
                    setAlarmas(nuevas);
                  }}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#10b981]"></div>
              </label>
            </div>
          ))}

          <button 
            type="submit"
            className="w-full mt-8 bg-[#10b981] hover:bg-[#34d399] text-[#020617] font-black py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-[0_10px_20px_rgba(16,185,129,0.2)] active:scale-95 text-xs tracking-widest uppercase"
          >
            <Icon icon="mdi:content-save-outline" className="text-xl" /> 
            Guardar en SITAE
          </button>
        </form>

        <div className="p-8 bg-[#020617]/50 grid grid-cols-2 gap-4 border-t border-white/5">
          <button 
            onClick={activarTimbre}
            disabled={timbreActivo}
            className={`flex flex-col items-center justify-center gap-2 p-4 rounded-2xl font-bold transition-all ${
              timbreActivo 
              ? 'bg-slate-800 text-slate-500 cursor-not-allowed opacity-50' 
              : 'bg-white/5 border border-white/10 text-red-500 hover:bg-red-500/10 hover:border-red-500/50'
            }`}
          >
            <Icon icon={timbreActivo ? "mdi:bell-ring" : "mdi:bell-play"} className={`text-3xl ${timbreActivo ? 'animate-bounce' : ''}`} />
            <span className="text-[9px] uppercase tracking-widest font-black">Activar</span>
          </button>

          <button 
            onClick={apagarTimbre}
            className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-white/5 border border-white/10 text-[#10b981] hover:bg-[#10b981]/10 hover:border-[#10b981]/50 font-bold transition-all"
          >
            <Icon icon="mdi:bell-off" className="text-3xl" />
            <span className="text-[9px] uppercase tracking-widest font-black">Detener</span>
          </button>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-2 opacity-30">
        <Icon icon="mdi:shield-check" className="text-2xl text-[#10b981]" />
        <p className="text-[9px] font-black tracking-[0.4em] uppercase">Security Encryption Enabled</p>
      </div>
    </div>
  );
};

export default DemoTimbre;