export default async function NoticiaPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Noticia: {slug}</h1>
            <p>Detalle de la noticia próximamente...</p>
        </div>
    );
}
