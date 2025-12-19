import React from 'react';
import '../globals.css';

export default function MinkaLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es">
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}