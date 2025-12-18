/* Archivo: src/app/layout.tsx */
import React from 'react';
import Link from 'next/link';
import "../globals.css"; // <--- ESTA ES LA CORRECCIÓN DE LA RUTA

export const metadata = {
  title: 'FIPE | Federación Iberoamericana',
  description: 'Articulando ciencia, cultura y políticas públicas.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="font-sans text-gray-900 bg-white flex flex-col min-h-screen">

        {/* HEADER PREMIUM */}
        <header className="bg-white py-6 sticky top-0 z-50 border-b border-gray-100">
          <div className="container mx-auto px-6 flex items-center justify-between">
            <Link href="/" className="text-3xl font-serif font-bold text-violet-900 tracking-tight hover:opacity-80 transition">
              FIPE
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
              <Link href="/sobre" className="hover:text-violet-900 transition-colors">Institucional</Link>
              <Link href="/noticias" className="hover:text-violet-900 transition-colors">Noticias</Link>
              <Link href="/minka" className="hover:text-violet-900 transition-colors">Minka</Link>
              <Link href="/contacto" className="px-6 py-2 bg-violet-800 text-white rounded-full font-bold text-sm hover:bg-violet-900 transition-all shadow-md hover:shadow-lg">
                Contacto
              </Link>
            </nav>
          </div>
        </header>

        {/* CONTENIDO */}
        <div className="flex-grow">
          {children}
        </div>

        {/* FOOTER PREMIUM OSCURO */}
        <footer className="bg-violet-900 text-white pt-20 pb-10 mt-auto">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12 mb-20">
              <div className="md:col-span-1">
                <h2 className="text-3xl font-serif font-bold mb-6">FIPE</h2>
                <p className="text-violet-200 text-sm leading-relaxed max-w-xs">
                  Federación Iberoamericana de Psicodélicos y Entógenos. Articulando ciencia, cultura y políticas públicas.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-6">Secciones</h3>
                <ul className="space-y-4 text-violet-200 text-sm">
                  <li><Link href="/sobre" className="hover:text-white transition">Institucional</Link></li>
                  <li><Link href="/noticias" className="hover:text-white transition">Noticias</Link></li>
                  <li><Link href="/minka" className="hover:text-white transition">Eventos</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-6">Contacto</h3>
                <a href="mailto:contacto@fipe.org" className="block text-violet-200 hover:text-white mb-6 text-lg">
                  contacto@fipe.org
                </a>
              </div>
            </div>
            <div className="border-t border-violet-800 pt-8 flex justify-between text-xs text-violet-400">
              <p>© 2025 FIPE.</p>
              <p>Desarrollado con sobriedad.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}