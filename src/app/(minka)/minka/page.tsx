import React from 'react';
import Link from 'next/link';

export default function MinkaPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#f5f5f0] text-[#3d3d3d] px-6 text-center border-t-8 border-[#d4d4ce]">
      
      <div className="max-w-lg animate-fade-in py-12">
        
        {/* Identidad MINKA */}
        <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#8a8a80] mb-4">
          Cultura & Reflexión
        </p>
        <h1 className="text-7xl md:text-8xl font-serif mb-6 tracking-tighter text-[#2a2a2a]">
          MINKA
        </h1>

        {/* Separador */}
        <div className="w-16 h-1 bg-[#d4d4ce] mx-auto mb-10"></div>

        {/* Texto del PDF */}
        <div className="space-y-6 mb-12">
          <h2 className="text-xl font-serif italic text-[#5a5a50]">
            "Espacio creativo, artístico y editorial de FIPE."
          </h2>
          <p className="font-sans text-[#4a4a40] leading-relaxed text-sm md:text-base">
            Su nombre remite a prácticas ancestrales de trabajo colaborativo, donde cada aporte construye el todo. 
            <br/><br/>
            Próximamente encontrarás aquí la <strong>Revista Digital</strong>, música de ambientación y obras compartidas por la red.
          </p>
        </div>

        {/* Etiqueta de estado */}
        <div className="inline-block px-4 py-1 border border-[#a3a39e] text-[#6e6e66] text-xs font-bold rounded-full uppercase tracking-wider mb-16">
          En Construcción — Fase Cultural
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