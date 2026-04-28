'use client';
import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

interface Alarma {
  hora: string;
  activa: boolean;
}

const DemoTimbre = () => {
  // Simulación de MAX_ALARMAS_FISICO del .ino
  const MAX_ALARMAS_FISICO = 30;

  // Estado de alarmas (Carga inicial desde LocalStorage para simular EEPROM)
  const [alarmas, setAlarmas] = useState<Alarma[]>([]);
  const [timbreActivo, setTimbreActivo] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  // Cargar "EEPROM" al montar
  useEffect(() => {
    const saved = localStorage.getItem('XMET_SITAE_PREFS');
    if (saved) {
      setAlarmas(JSON.parse(saved));
    } else {
      // Valor por defecto si la "EEPROM" está vacía
      setAlarmas([{ hora: "08:00", activa: false }]);
    }
  }, []);

  // Lógica del loop() - Detección de coincidencia horaria
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

  // Simulación de saveToPrefs()
  const saveToLocalStorage = (data: Alarma[]) => {
    localStorage.setItem('XMET_SITAE_PREFS', JSON.stringify(data));
    setStatusMsg("SINCRONIZADO CON EEPROM");
    setTimeout(() => setStatusMsg(""), 2000);
  };

  const handleAdd = () => {
    if (alarmas.length < MAX_ALARMAS_FISICO) {
      const nuevas = [...alarmas, { hora: "12:00", activa: false }];
      setAlarmas(nuevas);
      saveToLocalStorage(nuevas);
    }
  };

  const handleDelete = (id: number) => {
    const nuevas = alarmas.filter((_, i) => i !== id);
    setAlarmas(nuevas);
    saveToLocalStorage(nuevas);
  };

  const activarTimbre = () => {
    setTimbreActivo(true);
    setStatusMsg("TIMBRE ACTIVADO (RELAY HIGH)");
    setTimeout(() => {
      setTimbreActivo(false);
      setStatusMsg("");
    }, 5000); // En la demo dura 5s para no molestar, en el .ino 45s
  };

  const apagarTimbre = () => {
    setTimbreActivo(false);
    setStatusMsg("PARADA DE EMERGENCIA");
    setTimeout(() => setStatusMsg(""), 2000);
  };

  return (
    <div className="min-h-screen bg-[#020617] p-4 flex flex-col items-center font-sans text-slate-300">
      
      <Link href="/" className="fixed top-6 left-6 z-50">
        <button className="flex items-center gap-2 bg-[#10b981]/10 border border-[#10b981]/20 text-[#10b981] px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-[#10b981] hover:text-[#020617] transition-all duration-500 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.1)]">
          <Icon icon="mdi:arrow-left" className="text-lg" />
          Volver
        </button>
      </Link>
      
      {statusMsg && (
        <div className={`fixed top-5 z-50 p-4 rounded-2xl shadow-2xl text-white font-bold flex items-center gap-3 transition-all animate-in fade-in slide-in-from-top-4 ${
          timbreActivo ? 'bg-red-600' : 'bg-[#0f172a] border border-[#10b981]'
        }`}>
          <Icon icon={timbreActivo ? "mdi:bell-ring" : "mdi:memory"} className={timbreActivo ? "animate-bounce" : "text-[#10b981]"} />
          <span className="text-xs uppercase tracking-tighter">{statusMsg}</span>
        </div>
      )}

      <div className="w-full max-w-md bg-[#0f172a] rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden border border-white/5 mt-16">
       
        <div className="bg-[#020617] p-8 text-center border-b border-white/5">
          <h1 className="text-white text-2xl font-black tracking-tight uppercase">SITAE <span className="text-[#10b981]">XIDMET</span></h1>
          <div className="flex justify-center items-center gap-2 mt-2">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
            <p className="text-slate-500 text-[10px] uppercase font-bold tracking-[0.2em]">{alarmas.length} SLOTS ACTIVOS</p>
          </div>
        </div>

        <div className="p-6 max-h-[50vh] overflow-y-auto custom-scrollbar bg-[#0f172a]">
          {alarmas.map((alarma, i) => (
            <div key={i} className="flex items-center justify-between py-3 px-2 border-b border-white/5 group">
              <div className="flex items-center gap-3">
                <span className="text-slate-600 font-black text-xs">#{ (i + 1).toString().padStart(2, '0') }</span>
                <input 
                  type="time" 
                  value={alarma.hora}
                  onChange={(e) => {
                    const nuevas = [...alarmas];
                    nuevas[i].hora = e.target.value;
                    setAlarmas(nuevas);
                  }}
                  className="bg-transparent text-white text-lg font-bold outline-none focus:text-[#10b981]"
                />
              </div>
              <div className="flex items-center gap-4">
                <input 
                  type="checkbox" 
                  checked={alarma.activa}
                  onChange={(e) => {
                    const nuevas = [...alarmas];
                    nuevas[i].activa = e.target.checked;
                    setAlarmas(nuevas);
                    saveToLocalStorage(nuevas); // Auto-save al cambiar estado como un PLC real
                  }}
                  className="w-5 h-5 accent-[#10b981] cursor-pointer"
                />
                <button 
                  onClick={() => handleDelete(i)}
                  className="text-red-500/50 hover:text-red-500 transition-colors"
                >
                  <Icon icon="mdi:trash-can-outline" className="text-xl" />
                </button>
              </div>
            </div>
          ))}

          {alarmas.length < MAX_ALARMAS_FISICO && (
            <button 
              onClick={handleAdd}
              className="w-full mt-6 border-2 border-dashed border-[#10b981]/30 text-[#10b981] font-bold py-3 rounded-xl hover:bg-[#10b981]/5 transition-all text-[10px] uppercase tracking-widest"
            >
              + Agregar Alarma
            </button>
          )}
        </div>

        <div className="p-8 bg-[#020617]/50 grid grid-cols-1 gap-4 border-t border-white/5">
           <button 
              onClick={() => saveToLocalStorage(alarmas)}
              className="w-full bg-[#10b981] text-[#020617] font-black py-4 rounded-xl text-xs uppercase tracking-widest hover:brightness-110 transition-all mb-2"
            >
              Sincronizar con Memoria
            </button>
          
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={activarTimbre}
              disabled={timbreActivo}
              className="bg-white/5 border border-white/10 text-red-500 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-red-500/10 transition-all"
            >
              Manual ON
            </button>
            <button 
              onClick={apagarTimbre}
              className="bg-white/5 border border-white/10 text-[#10b981] py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[#10b981]/10 transition-all"
            >
              Manual OFF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoTimbre;