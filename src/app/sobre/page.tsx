import Link from 'next/link';

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      <section className="container mx-auto px-6 py-20 max-w-4xl">
        
        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-serif text-violet-900 mb-12 text-center">
          Sobre FIPE
        </h1>

        {/* Historia [cite: 105, 106] */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 font-serif">Nuestra Historia</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            FIPE surge como el encuentro de organizaciones y personas involucradas profundamente en las diversas realidades que atraviesan los psicodélicos en Iberoamérica.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Recogemos los aprendizajes del proceso colectivo "Latam Psicodélicos" y respondemos a la necesidad de consolidar una red sólida, formal y horizontal que articule esfuerzos regionales desde un enfoque situado.
          </p>
        </div>

        {/* Grid de Misión y Visión */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          
          {/* Misión [cite: 100] */}
          <div className="bg-violet-50 p-8 rounded-2xl border border-violet-100">
            <h3 className="text-xl font-bold text-violet-800 mb-4 font-serif">Misión</h3>
            <p className="text-gray-700">
              Facilitar la interacción entre personas, grupos y organizaciones para ejecutar acciones y proyectos que promuevan el uso responsable en la sociedad.
            </p>
          </div>

          {/* Visión [cite: 102] */}
          <div className="bg-violet-50 p-8 rounded-2xl border border-violet-100">
            <h3 className="text-xl font-bold text-violet-800 mb-4 font-serif">Visión</h3>
            <p className="text-gray-700">
              Construir una Iberoamérica donde los psicodélicos sean accesibles, comprendidos en su beneficio e integrados de manera respetuosa y sostenible.
            </p>
          </div>
        </div>

        {/* Valores [cite: 103] */}
        <div className="text-center border-t border-gray-200 pt-12">
          <h3 className="text-xl font-bold text-gray-400 mb-6 uppercase tracking-widest text-sm">Nuestros Valores</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Ética y sacralidad", "Diversidad y respeto", "Empoderamiento y co-creación", "Colaboración y bienestar"].map((valor) => (
              <span key={valor} className="px-4 py-2 bg-gray-100 rounded-full text-gray-600 font-medium text-sm">
                {valor}
              </span>
            ))}
          </div>
        </div>

      </section>
    </main>
  );
}