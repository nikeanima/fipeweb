/* src/app/page.tsx */
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="bg-violet-900 text-white py-24 px-6 text-center relative overflow-hidden">
        {/* Gradiente sutil de fondo */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-violet-950 to-violet-800 opacity-50 z-0"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="uppercase tracking-[0.2em] text-violet-200 text-sm mb-4 font-bold">
            Iberoamérica
          </p>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 tracking-tight leading-tight">
            FIPE
          </h1>
          
          {/* TEXTO REAL DEL PDF */}
          <p className="text-xl md:text-2xl text-violet-50 font-light leading-relaxed mb-12 max-w-4xl mx-auto">
            Una red colaborativa que articula organizaciones, comunidades y profesionales comprometidos con el uso ético, seguro y consciente de psicodélicos y enteógenos en Iberoamérica.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/sobre" 
              className="bg-white text-violet-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Quiénes somos
            </Link>
            <Link 
              href="/contacto" 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition hover:-translate-y-1"
            >
              Sumarse a la red
            </Link>
          </div>
        </div>
      </section>

      {/* --- OBJETIVOS (Con íconos SVG profesionales) --- */}
      <section className="py-24 px-6 container mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif text-violet-900 mb-6">Nuestros Objetivos</h2>
          <p className="text-xl text-gray-500 font-light">
            Buscamos conectar saberes ancestrales, ciencia y comunidad en un marco de respeto y diversidad.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Tarjeta 1: Articulación */}
          <div className="p-8 bg-white rounded-3xl border border-gray-100 hover:border-violet-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
            {/* Ícono SVG: Red/Conexión */}
            <div className="text-violet-600 mb-6 p-4 bg-violet-50 rounded-2xl inline-block group-hover:bg-violet-600 group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="18" r="3"/>
                <line x1="8.5" y1="8.5" x2="15.5" y2="15.5"/><line x1="15.5" y1="8.5" x2="8.5" y2="15.5"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-violet-900 mb-4 font-serif">Articulación Regional</h3>
            <p className="text-gray-600 leading-relaxed">
              Consolidar una red sólida y horizontal que visibilice iniciativas y fortalezca la cooperación entre organizaciones de Iberoamérica.
            </p>
          </div>

          {/* Tarjeta 2: Políticas */}
          <div className="p-8 bg-white rounded-3xl border border-gray-100 hover:border-violet-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
            {/* Ícono SVG: Balanza/Ética */}
            <div className="text-violet-600 mb-6 p-4 bg-violet-50 rounded-2xl inline-block group-hover:bg-violet-600 group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v18"/><path d="M6 8l-4 4 4 4"/><path d="M18 8l4 4-4 4"/><path d="M2 12h20"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-violet-900 mb-4 font-serif">Políticas y Ética</h3>
            <p className="text-gray-600 leading-relaxed">
              Impulsar regulaciones responsables, marcos éticos y metodológicos para el desarrollo de políticas públicas justas.
            </p>
          </div>

          {/* Tarjeta 3: Formación */}
          <div className="p-8 bg-white rounded-3xl border border-gray-100 hover:border-violet-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
            {/* Ícono SVG: Hoja/Saberes */}
            <div className="text-violet-600 mb-6 p-4 bg-violet-50 rounded-2xl inline-block group-hover:bg-violet-600 group-hover:text-white transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22c4.97-1.08 9-5.38 9-11V5a1 1 0 0 0-1-1h-4a5 5 0 0 0-5 5v12z"/><path d="M12 22C7.03 20.92 3 16.62 3 11V5a1 1 0 0 1 1-1h4a5 5 0 0 1 5 5v12z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-violet-900 mb-4 font-serif">Formación y Salud</h3>
            <p className="text-gray-600 leading-relaxed">
              Promover espacios de educación, reducción de riesgos y reconocimiento de saberes ancestrales y prácticas seguras.
            </p>
          </div>
        </div>
      </section>

      {/* --- BANNER MINKA (CTA Final) --- */}
      <section className="py-24 bg-stone-100 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif text-stone-800 mb-6">MINKA</h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            El espacio creativo, artístico y editorial de la red.
          </p>
          <Link 
            href="/minka" 
            className="inline-block border-2 border-stone-800 text-stone-900 font-bold px-8 py-3 rounded-full hover:bg-stone-800 hover:text-white transition duration-300"
          >
            Visitar espacio cultural &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}