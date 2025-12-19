import React from 'react';

const news = [
    {
        id: 1,
        title: "¿Por qué es importante una red iberoamericana de psicodélicos?",
        date: "18 de Diciembre, 2025",
        category: "Institucional",
        excerpt: "Este artículo introduce los fundamentos de FIPE, destacando la necesidad de articulación regional para compartir saberes, generar incidencia y acompañar los procesos de regulación.",
        content: "Este artículo introduce los fundamentos de FIPE, destacando la necesidad de articulación regional para compartir saberes, generar incidencia y acompañar los procesos de regulación y expansión del acceso consciente a enteógenos."
    },
    {
        id: 2,
        title: "Sinergias en Acción – Casos de colaboración entre organizaciones FIPE",
        date: "15 de Diciembre, 2025",
        category: "Comunidad",
        excerpt: "Se presentan ejemplos reales de colaboración entre miembros de FIPE, mostrando cómo la unión fortalece proyectos y amplía el impacto social y científico.",
        content: "Se presentan ejemplos reales de colaboración entre miembros de FIPE (como SUPAP + Cosmovisión o BMed + Mindsurf), mostrando cómo la unión fortalece proyectos y amplía el impacto social y científico."
    }
];

export default function NoticiasPage() {
    return (
        <main className="min-h-screen bg-slate-50 py-20 px-6">
            <div className="container mx-auto">

                {/* Header */}
                <header className="mb-16 text-center max-w-2xl mx-auto">
                    <p className="text-violet-600 font-bold tracking-widest uppercase text-sm mb-4">Actualidad</p>
                    <h1 className="text-4xl md:text-5xl font-serif text-violet-900 font-bold mb-6">Noticias y Comunicados</h1>
                    <p className="text-gray-500 font-light text-lg">Novedades de la red y el ecosistema psicodélico regional.</p>
                </header>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {news.map((item) => (
                        <article key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 flex flex-col hover:-translate-y-1 duration-300">
                            <div className="h-56 bg-violet-100 relative">
                                <div className="absolute inset-0 flex items-center justify-center text-violet-300">
                                    <svg className="w-16 h-16 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
                                </div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex items-center justify-between text-xs mb-4">
                                    <span className="font-bold text-violet-600 uppercase tracking-wider bg-violet-50 px-3 py-1 rounded-full">{item.category}</span>
                                    <span className="text-gray-400">{item.date}</span>
                                </div>
                                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 leading-tight">
                                    {item.title}
                                </h2>
                                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                                    {item.excerpt}
                                </p>
                                <button className="text-violet-700 font-bold text-sm hover:text-violet-900 flex items-center gap-2 group self-start">
                                    Leer artículo completo <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </main>
    );
}
