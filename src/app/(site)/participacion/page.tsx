
export default function ParticipacionPage() {
    return (
        <main className="min-h-screen bg-slate-50 py-20 px-6">
            <div className="container mx-auto max-w-4xl">

                <header className="mb-16 text-center">
                    <p className="text-violet-600 font-bold tracking-widest uppercase text-sm mb-4">Sumate a la Red</p>
                    <h1 className="text-4xl md:text-5xl font-serif text-violet-900 font-bold mb-6">Participación</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Sé parte de una comunidad activa que construye el futuro de los psicodélicos en Iberoamérica.
                    </p>
                </header>

                {/* ¿Por qué unirse? */}
                <section className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 mb-10">
                    <h2 className="text-3xl font-serif text-violet-800 mb-8">¿Por qué unirse a FIPE?</h2>
                    <ul className="space-y-4 text-gray-700">
                        <li className="flex items-start gap-3">
                            <span className="text-violet-500 font-bold">✓</span>
                            Ser parte de una red iberoamericana activa y articulada.
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-violet-500 font-bold">✓</span>
                            Acceder a espacios de colaboración, formación y visibilización.
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-violet-500 font-bold">✓</span>
                            Obtener respaldo colectivo ante desafíos legales, sociales y mediáticos.
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-violet-500 font-bold">✓</span>
                            Compartir conocimientos, buenas prácticas y recursos.
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-violet-500 font-bold">✓</span>
                            Participar en proyectos, encuentros y eventos internacionales.
                        </li>
                    </ul>
                </section>

                {/* Quiénes pueden unirse */}
                <section className="bg-violet-900 text-white p-10 rounded-3xl shadow-lg mb-10">
                    <h2 className="text-2xl font-serif mb-4">¿Quiénes pueden unirse?</h2>
                    <p className="text-violet-100 leading-relaxed text-lg">
                        Organizaciones, colectivos, profesionales independientes y comunidades que trabajen en temas relacionados con psicodélicos, enteógenos, terapias, integración, reducción de daños, investigación o política.
                    </p>
                </section>

                {/* Procedimiento (Placeholder) */}
                <section className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                    <div className="text-center py-10 border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50">
                        <h3 className="text-xl font-bold text-gray-400 mb-2">Procedimiento de Inscripción</h3>
                        <p className="text-gray-500 mb-6">Formulario de adhesión y criterios éticos en construcción.</p>
                        <button className="px-6 py-2 bg-gray-200 text-gray-400 font-bold rounded-full cursor-not-allowed">
                            Próximamente
                        </button>
                    </div>
                </section>

            </div>
        </main>
    );
}
