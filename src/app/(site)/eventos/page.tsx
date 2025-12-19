
export default function EventosPage() {
    return (
        <main className="min-h-screen bg-slate-50 py-20 px-6">
            <div className="container mx-auto max-w-4xl">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif text-violet-900 font-bold mb-4">Eventos y Conferencias</h1>
                    <p className="text-gray-500">Congresos, webinares y encuentros de la comunidad.</p>
                </header>

                <section className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 text-center">
                    <div className="w-20 h-20 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-6 text-violet-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Calendario en construcción</h2>
                    <p className="text-gray-500 mb-8 max-w-md mx-auto">
                        Estamos coordinando la agenda de actividades 2025. Pronto podrás registrarte a los próximos eventos.
                    </p>
                    <button className="px-8 py-3 bg-violet-900 text-white rounded-full font-bold opacity-50 cursor-not-allowed">
                        Ver Próximos Eventos
                    </button>
                </section>
            </div>
        </main>
    );
}
