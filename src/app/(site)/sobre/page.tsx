import React from 'react';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-slate-50 py-20 px-6">
            <div className="container mx-auto max-w-4xl">

                {/* Header */}
                <header className="mb-16 text-center">
                    <p className="text-violet-600 font-bold tracking-widest uppercase text-sm mb-4">Institucional</p>
                    <h1 className="text-4xl md:text-5xl font-serif text-violet-900 font-bold mb-8">Quiénes Somos</h1>
                    <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light max-w-4xl mx-auto mb-8">
                        La Federación Iberoamericana de Psicodélicos y Enteógenos (FIPE) es una red colaborativa que articula organizaciones, comunidades, profesionales e instituciones comprometidas con el uso ético, seguro y consciente de psicodélicos y enteógenos en Iberoamérica.
                    </p>
                    <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto font-light text-lg">
                        Buscamos conectar saberes ancestrales, prácticas terapéuticas contemporáneas, investigación científica y experiencias comunitarias en un marco de respeto, diversidad y co-creación.
                    </p>
                    <div className="w-20 h-1 bg-violet-200 mx-auto rounded-full mt-12"></div>
                </header>

                {/* Misión, Visión, Valores */}
                <section className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 mb-10">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl font-serif text-violet-800 mb-4">Nuestra Misión</h2>
                            <p className="text-gray-600 leading-relaxed font-light">
                                Facilitar la interacción entre personas, grupos y organizaciones involucradas en el ámbito psicodélico para ejecutar acciones y proyectos que promuevan su uso responsable en la sociedad.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-serif text-violet-800 mb-4">Nuestra Visión</h2>
                            <p className="text-gray-600 leading-relaxed font-light">
                                Construir una Iberoamérica en donde los psicodélicos sean accesibles, comprendidos en su beneficio, e integrados de manera respetuosa y sostenible.
                            </p>
                        </div>
                    </div>

                    <div className="my-10 border-t border-gray-100"></div>

                    <div>
                        <h2 className="text-2xl font-serif text-violet-800 mb-6 text-center">Nuestros Valores</h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            {['Amor y vínculo humano', 'Ética y sacralidad', 'Diversidad y respeto', 'Empoderamiento y co-creación', 'Colaboración y bienestar colectivo'].map((valor) => (
                                <span key={valor} className="px-4 py-2 bg-violet-50 text-violet-700 rounded-full text-sm font-bold border border-violet-100">
                                    {valor}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Historia */}
                <section className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 mb-10">
                    <h2 className="text-3xl font-serif text-violet-800 mb-6">Historia</h2>
                    <div className="prose text-gray-600 leading-relaxed font-light max-w-none">
                        <p className="mb-4">
                            FIPE surge como el encuentro de organizaciones y personas involucradas profundamente en las diversas realidades que atraviesan los psicodélicos en Latinoamérica e Iberoamérica. Recoge aprendizajes del proceso colectivo Latam Psicodélicos y responde a la necesidad de consolidar una red sólida, formal y horizontal que articule esfuerzos regionales desde un enfoque situado.
                        </p>
                        <p>
                            Su propósito es fortalecer el ecosistema psicodélico mediante el diálogo, la cooperación y la articulación interorganizacional en torno a políticas públicas y de drogas, investigación científica, educación y salud, reducción de riesgos, prácticas seguras y el reconocimiento de los saberes ancestrales.
                        </p>
                    </div>
                </section>

                {/* Objetivos */}
                <section className="bg-violet-900 text-white p-10 rounded-3xl shadow-lg mb-10">
                    <h2 className="text-3xl font-serif mb-8 text-center text-violet-100">Objetivos Principales</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-violet-700/50 p-3 rounded-xl min-w-[50px] text-center font-bold">1</div>
                            <p className="text-violet-100 font-light">Visibilizar iniciativas y proyectos regionales.</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-violet-700/50 p-3 rounded-xl min-w-[50px] text-center font-bold">2</div>
                            <p className="text-violet-100 font-light">Fortalecer redes de colaboración entre organizaciones.</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-violet-700/50 p-3 rounded-xl min-w-[50px] text-center font-bold">3</div>
                            <p className="text-violet-100 font-light">Impulsar la regulación responsable y los marcos éticos y metodológicos.</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-violet-700/50 p-3 rounded-xl min-w-[50px] text-center font-bold">4</div>
                            <p className="text-violet-100 font-light">Promover espacios de formación, integración y reducción de daños.</p>
                        </div>
                        <div className="flex items-start gap-4 md:col-span-2">
                            <div className="bg-violet-700/50 p-3 rounded-xl min-w-[50px] text-center font-bold">5</div>
                            <p className="text-violet-100 font-light">Facilitar acceso a recursos y sostenibilidad para proyectos emergentes.</p>
                        </div>
                    </div>
                </section>

                {/* Estructura / Comités */}
                <section className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                    <header className="mb-8">
                        <h2 className="text-3xl font-serif text-violet-800 mb-2">Comités y Áreas de Trabajo</h2>
                        <p className="text-gray-500 font-light">FIPE opera a través de comités funcionales que impulsan las acciones de la red.</p>
                    </header>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-violet-200 transition">
                            <h3 className="font-bold text-violet-900 mb-2">Comunidad</h3>
                            <p className="text-sm text-gray-600">Fortalece la participación, networking y el cuidado colectivo.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-violet-200 transition">
                            <h3 className="font-bold text-violet-900 mb-2">Comunicación</h3>
                            <p className="text-sm text-gray-600">Gestiona redes, contenidos, campañas y medios.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-violet-200 transition">
                            <h3 className="font-bold text-violet-900 mb-2">Eventos</h3>
                            <p className="text-sm text-gray-600">Coordina la organización de encuentros, talleres y foros.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-violet-200 transition">
                            <h3 className="font-bold text-violet-900 mb-2">Legales (en formación)</h3>
                            <p className="text-sm text-gray-600">Acompañamiento en políticas públicas y regulaciones.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-violet-200 transition">
                            <h3 className="font-bold text-violet-900 mb-2">Formación y Saberes</h3>
                            <p className="text-sm text-gray-600">Curaduría de programas, talleres y acreditaciones.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-violet-200 transition">
                            <h3 className="font-bold text-violet-900 mb-2">Investigación y Ética</h3>
                            <p className="text-sm text-gray-600">Desarrollo de marcos metodológicos y éticos alineados con normas de convivencia.</p>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}
