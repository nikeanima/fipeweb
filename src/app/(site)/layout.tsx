import Link from 'next/link';
import React from 'react';
import '../globals.css';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen font-sans text-gray-900 bg-white">

        {/* --- HEADER (Como en la foto: Limpio, Logo a la izq, Botón a la derecha) --- */}
        <header className="bg-white py-6 sticky top-0 z-50 border-b border-gray-100">
          <div className="container mx-auto px-6 flex items-center justify-between">

            {/* Logo FIPE */}
            <Link href="/" className="text-3xl font-serif font-bold text-violet-900 tracking-tight">
              FIPE
            </Link>

            {/* Navegación Desktop */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
              <Link href="/sobre" className="hover:text-violet-900 transition-colors">
                Institucional
              </Link>
              <Link href="/noticias" className="hover:text-violet-900 transition-colors">
                Noticias
              </Link>
              <Link href="/minka" className="hover:text-violet-900 transition-colors">
                Minka
              </Link>

              {/* Botón Contacto (Píldora violeta como en la foto) */}
              <Link
                href="/contacto"
                className="px-6 py-2 bg-violet-800 text-white rounded-full font-bold text-sm hover:bg-violet-900 transition-all shadow-md hover:shadow-lg"
              >
                Contacto
              </Link>
            </nav>
          </div>
        </header>

        {/* --- CONTENIDO DE LA PÁGINA --- */}
        <div className="flex-grow">
          {children}
        </div>

        {/* --- FOOTER (El gigante oscuro de la foto) --- */}
        <footer className="bg-violet-900 text-white pt-20 pb-10 mt-auto">
          <div className="container mx-auto px-6">

            <div className="grid md:grid-cols-3 gap-12 mb-20">

              {/* Columna 1: Marca y Bajada */}
              <div className="md:col-span-1">
                <h2 className="text-3xl font-serif font-bold mb-6">FIPE</h2>
                <p className="text-violet-200 text-sm leading-relaxed max-w-xs">
                  Federación Iberoamericana de Psicodélicos y Entógenos. Articulando ciencia, cultura y políticas públicas desde una perspectiva regional.
                </p>
              </div>

              {/* Columna 2: Secciones */}
              <div>
                <h3 className="font-serif text-xl mb-6">Secciones</h3>
                <ul className="space-y-4 text-violet-200 text-sm">
                  <li><Link href="/sobre" className="hover:text-white transition">Institucional</Link></li>
                  <li><Link href="/noticias" className="hover:text-white transition">Noticias & Comunicados</Link></li>
                  <li><Link href="/eventos" className="hover:text-white transition">Agenda de Eventos</Link></li>
                  <li><Link href="/minka" className="hover:text-white transition opacity-70">MINKA</Link></li>
                </ul>
              </div>

              {/* Columna 3: Contacto */}
              <div>
                <h3 className="font-serif text-xl mb-6">Contacto</h3>
                <a href="mailto:contacto@fipe.org" className="block text-violet-200 hover:text-white mb-6 text-lg">
                  contacto@fipe.org
                </a>

                {/* Iconos sociales simulados */}
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-violet-800 flex items-center justify-center hover:bg-violet-700 transition text-white" aria-label="Website">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-violet-800 flex items-center justify-center hover:bg-violet-700 transition text-white" aria-label="Link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Línea final */}
            <div className="border-t border-violet-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-violet-400">
              <p>© 2025 FIPE. Todos los derechos reservados.</p>
              <p>Desarrollado con sobriedad y transparencia.</p>
            </div>

          </div>
        </footer>

      </body>
    </html>
  );
}