
const comites = [
    {
        title: "Eventos y Congresos",
        desc: "Coordinación de encuentros, foros internacionales y talleres."
    },
    {
        title: "Investigación y Desarrollo",
        desc: "Certificaciones, marcos metodológicos y estudios científcos en curso."
    },
    {
        title: "Desarrollo Profesional",
        desc: "Capacitación y formación continua en terapias asistidas y reducción de riesgos."
    },
    {
        title: "Ética y Legislación",
        desc: "Asesoramiento legal, guías éticas y acompañamiento en regulaciones."
    },
    {
        title: "Proyectos y Comunidad",
        desc: "Apoyo a comunidades indígenas, networking e incubadora de proyectos."
    },
    {
        title: "Comunicación",
        desc: "Gestión de redes, difusión de contenidos y campañas."
    }
];

export default function ComitesPage() {
    return (
        <main className="min-h-screen bg-slate-50 py-20 px-6">
            <div className="container mx-auto max-w-5xl">

                <header className="mb-16 text-center">
                    <p className="text-violet-600 font-bold tracking-widest uppercase text-sm mb-4">Estructura de Trabajo</p>
                    <h1 className="text-4xl md:text-5xl font-serif text-violet-900 font-bold mb-6">Comités y Áreas</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        FIPE opera a través de grupos de trabajo especializados que impulsan las acciones de la red.
                    </p>
                </header>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {comites.map((c, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-violet-300 transition hover:-translate-y-1">
                            <h3 className="text-xl font-bold text-violet-800 mb-3 font-serif">{c.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {c.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-violet-100 p-8 rounded-2xl text-center text-violet-800">
                    <p className="font-bold mb-2">¿Te interesa sumarte a un comité?</p>
                    <p className="text-sm">Escríbenos para conocer los requisitos de participación.</p>
                </div>

            </div>
        </main>
    );
}
