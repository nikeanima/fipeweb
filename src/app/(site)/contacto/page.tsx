import React from 'react';

export default function ContactoPage() {
    return (
        <main className="min-h-screen bg-slate-50 py-20 px-6">
            <div className="container mx-auto max-w-3xl">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif text-violet-900 font-bold mb-4">Contacto</h1>
                    <p className="text-gray-500">¿Tienes dudas o propuestas? Escríbenos.</p>
                </header>

                <section className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Nombre Completo</label>
                            <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500" placeholder="Tu nombre" disabled />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Correo Electrónico</label>
                            <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-violet-500" placeholder="tucorreo@ejemplo.com" disabled />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Mensaje</label>
                            <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 h-32 focus:outline-none focus:border-violet-500" placeholder="¿En qué podemos ayudarte?" disabled></textarea>
                        </div>
                        <button className="w-full bg-violet-800 text-white font-bold py-4 rounded-xl opacity-70 cursor-not-allowed">
                            Enviar Mensaje (Próximamente)
                        </button>
                    </div>

                    <div className="mt-12 text-center border-t border-gray-100 pt-8">
                        <p className="text-gray-500 text-sm mb-2">También puedes escribirnos directamente a:</p>
                        <a href="mailto:contacto@fipe.org" className="text-violet-700 font-bold text-lg hover:underline">contacto@fipe.org</a>
                    </div>
                </section>
            </div>
        </main>
    );
}
