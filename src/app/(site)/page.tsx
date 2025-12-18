import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      
      {/* HERO SECTION */}
      <section className="bg-violet-900 text-white py-24 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight">
          FIPE
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 text-violet-100 font-light">
          Federación Iberoamericana de Psicodélicos y Entógenos
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-violet-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">
            Qué hacemos
          </button>
          <button className="border border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
            Contactar
          </button>
        </div>
      </section>

      {/* EJES DE TRABAJO */}
      <section className="py-20 px-6 container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-violet-900 mb-4">Nuestros Ejes</h2>
          <p className="text-gray-500">Articulación transversal entre ciencia y saberes ancestrales.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Tarjeta 1 */}
          <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition bg-gray-50">
            <h3 className="text-xl font-bold text-violet-800 mb-3 font-serif">Investigación</h3>
            <p className="text-gray-600 leading-relaxed">
              Promoción de estudios científicos situados que respeten las particularidades regionales.
            </p>
          </div>
          {/* Tarjeta 2 */}
          <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition bg-gray-50">
            <h3 className="text-xl font-bold text-violet-800 mb-3 font-serif">Políticas Públicas</h3>
            <p className="text-gray-600 leading-relaxed">
              Desarrollo de guías éticas y asesoramiento para marcos regulatorios justos.
            </p>
          </div>
          {/* Tarjeta 3 */}
          <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition bg-gray-50">
            <h3 className="text-xl font-bold text-violet-800 mb-3 font-serif">Cultura</h3>
            <p className="text-gray-600 leading-relaxed">
              Preservación y difusión de narrativas culturales y usos tradicionales.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}