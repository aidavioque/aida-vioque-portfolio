import 'styles/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  // display: 'swap',
  variable: '--font-inter',
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`relative bg-infoBg font-sans text-soft ${inter.variable}`}
      >
        <main className="w-full bg-infoBg">{children}</main>
      </body>
    </html>
  );
}
