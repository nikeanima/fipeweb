
export default function PublicacionesPage() {
    return (
        <main className="min-h-screen bg-slate-50 py-20 px-6">
            <div className="container mx-auto max-w-4xl">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif text-violet-900 font-bold mb-4">Publicaciones y Recursos</h1>
                    <p className="text-gray-500">Biblioteca científica, guías y documentos de referencia.</p>
                </header>

                <section className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 text-center">
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Biblioteca Digital</h2>
                    <p className="text-gray-500 mb-8 max-w-md mx-auto">
                        Próximamente acceso libre a estudios científicos, manuales de reducción de riesgos y material educativo.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto opacity-50 pointer-events-none">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="h-32 bg-gray-100 rounded-lg border border-gray-200"></div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
