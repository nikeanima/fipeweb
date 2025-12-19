export default async function IssuePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Issue: {slug}</h1>
            <p>Detalle del issue próximamente...</p>
        </div>
    );
}
