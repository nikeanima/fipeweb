export default async function ArticuloPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Artículo: {slug}</h1>
            <p>Contenido próximamente...</p>
        </div>
    );
}
