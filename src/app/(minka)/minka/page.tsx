import Link from 'next/link';
import React from 'react';

export default function MinkaPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#f5f5f0] text-[#3d3d3d] px-6 text-center border-t-8 border-[#d4d4ce] relative overflow-hidden">

      {/* Audio Player (Hidden or minimal) */}
      <div className="fixed bottom-4 right-4 z-50 bg-white p-2 rounded-full shadow-md border border-[#d4d4ce] flex items-center gap-2 opacity-50 hover:opacity-100 transition">
        <span className="text-xs font-bold text-[#8a8a80] uppercase tracking-wider pl-2">Sonido Ambiente</span>
        <audio controls autoPlay loop className="h-8 w-24">
          {/* Placeholder source - replace with actual Minka audio */}
          <source src="/minka-ambient.mp3" type="audio/mpeg" />
          Tu navegador no soporta audio.
        </audio>
      </div>

      <div className="max-w-4xl animate-fade-in py-12 w-full">

        {/* Identidad MINKA */}
        <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#8a8a80] mb-4">
          Cultura & Reflexión
        </p>
        <h1 className="text-7xl md:text-9xl font-serif mb-6 tracking-tighter text-[#2a2a2a]">
          MINKA
        </h1>

        <div className="w-24 h-1 bg-[#d4d4ce] mx-auto mb-16"></div>

        {/* MENÚ MINKA */}
        <div className="grid md:grid-cols-2 gap-8 text-left mb-20 bg-white p-10 shadow-sm rounded-sm border border-[#e5e5e0]">

          <div>
            <h2 className="font-serif text-2xl text-[#2a2a2a] mb-4 italic">Sobre Minka</h2>
            <ul className="space-y-2 text-[#5a5a50] text-sm">
              <li className="hover:text-[#2a2a2a] cursor-pointer">→ Misión y Visión Cultural</li>
              <li className="hover:text-[#2a2a2a] cursor-pointer">→ Organizaciones Colaboradoras</li>
              <li className="hover:text-[#2a2a2a] cursor-pointer font-bold">→ 1ra Edición (Próximo Lanzamiento)</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-[#2a2a2a] mb-4 italic">Participación</h2>
            <ul className="space-y-2 text-[#5a5a50] text-sm">
              <li className="hover:text-[#2a2a2a] cursor-pointer">→ Haz tu donación</li>
              <li className="hover:text-[#2a2a2a] cursor-pointer">→ Postula tu creación</li>
              <li className="hover:text-[#2a2a2a] cursor-pointer">→ Parámetros de publicación</li>
              <li className="hover:text-[#2a2a2a] cursor-pointer">→ Proceso de revisión</li>
            </ul>
          </div>

        </div>

        {/* Call to Action - Artistas */}
        <div className="bg-[#2a2a2a] text-[#f5f5f0] p-10 rounded-sm mb-16">
          <h3 className="font-serif text-2xl mb-4">Convocatoria Abierta</h3>
          <p className="text-sm opacity-80 mb-6 font-sans max-w-lg mx-auto">
            Estamos recibiendo obras para la primera edición. Si eres artista, investigador o creador, queremos conocer tu trabajo.
          </p>
          <button className="border border-[#f5f5f0] px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-[#f5f5f0] hover:text-[#2a2a2a] transition">
            Ver bases y condiciones
          </button>
        </div>


        {/* Volver */}
        <div>
          <Link
            href="/"
            className="text-[#8a8a80] hover:text-black transition-colors text-sm font-sans border-b border-transparent hover:border-black pb-1"
          >
            ← Volver a FIPE Institucional
          </Link>
        </div>
      </div>
    </main>
  );
}