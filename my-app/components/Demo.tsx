import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

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
    setStatusMsg(" Sistema desactivado correctamente");
    setTimeout(() => setStatusMsg(""), 2000);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMsg("¡Cambios guardados en memoria!");
    setTimeout(() => setStatusMsg(""), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 flex flex-col items-center font-sans text-slate-900">
      
     
      {statusMsg && (
        <div className={`fixed top-5 z-50 p-4 rounded-2xl shadow-2xl text-white font-bold flex items-center gap-3 transition-all animate-in fade-in slide-in-from-top-4 ${
          timbreActivo ? 'bg-red-600' : 'bg-emerald-600'
        }`}>
          <Icon icon={timbreActivo ? "mdi:bell-ring" : "mdi:check-circle"} className="text-2xl" />
          {statusMsg}
        </div>
      )}

      <div className="w-full max-w-md bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-200">
       
        <div className="bg-slate-900 p-8 text-center">
          <div className="inline-flex p-3 rounded-2xl bg-slate-800 mb-3">
            <Icon icon="mdi:router-wireless" className="text-blue-400 text-3xl" />
          </div>
          <h1 className="text-white text-2xl font-black tracking-tight">SITAE XIDMET</h1>
          <div className="flex justify-center items-center gap-2 mt-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <p className="text-slate-400 text-[10px] uppercase font-bold tracking-[0.2em]">Hardware Online</p>
          </div>
        </div>

        <form onSubmit={handleSave} className="p-6 max-h-[50vh] overflow-y-auto custom-scrollbar">
          <div className="flex items-center justify-between mb-6 px-2">
            <h2 className="font-bold text-slate-700">Cronograma</h2>
            <span className="text-xs font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded-lg">17 Slots</span>
          </div>
          
          {alarmas.map((alarma, i) => (
            <div key={i} className="flex items-center justify-between py-3 px-2 hover:bg-slate-50 rounded-xl transition-colors group">
              <div className="flex items-center gap-3">
                <span className="text-slate-300 font-black text-xs">{(i + 1).toString().padStart(2, '0')}</span>
                <input 
                  type="time" 
                  value={alarma.hora}
                  onChange={(e) => {
                    const nuevas = [...alarmas];
                    nuevas[i].hora = e.target.value;
                    setAlarmas(nuevas);
                  }}
                  className="bg-transparent text-lg font-semibold outline-none focus:text-blue-600 transition-colors"
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
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          ))}

          <button 
            type="submit"
            className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-[0_10px_20px_rgba(37,99,235,0.2)] active:scale-95"
          >
            <Icon icon="mdi:content-save-outline" className="text-xl" /> 
            GUARDAR CONFIGURACIÓN
          </button>
        </form>

      
        <div className="p-8 bg-slate-50 grid grid-cols-2 gap-4">
          <button 
            onClick={activarTimbre}
            disabled={timbreActivo}
            className={`flex flex-col items-center justify-center gap-2 p-4 rounded-2xl font-bold transition-all border-b-4 active:border-b-0 ${
              timbreActivo 
              ? 'bg-slate-200 border-slate-300 text-slate-400 cursor-not-allowed' 
              : 'bg-white border-red-100 text-red-500 hover:bg-red-50 hover:border-red-200 shadow-sm'
            }`}
          >
            <Icon icon={timbreActivo ? "mdi:bell-ring" : "mdi:bell-play"} className={`text-3xl ${timbreActivo ? 'animate-bounce' : ''}`} />
            <span className="text-[10px] uppercase tracking-widest">Activar</span>
          </button>

          <button 
            onClick={apagarTimbre}
            className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-white border-b-4 border-emerald-100 text-emerald-500 hover:bg-emerald-50 hover:border-emerald-200 font-bold transition-all shadow-sm active:border-b-0"
          >
            <Icon icon="mdi:bell-off" className="text-3xl" />
            <span className="text-[10px] uppercase tracking-widest">Detener</span>
          </button>
        </div>
      </div>

      {/* Footer Demo */}
      <div className="mt-8 flex flex-col items-center gap-2 opacity-50">
        <Icon icon="logos:nextjs-icon" className="text-2xl" />
        <p className="text-[10px] font-bold tracking-widest uppercase">UX Preview Mode</p>
      </div>
    </div>
  );
};

export default DemoTimbre;
