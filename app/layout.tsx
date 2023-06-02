import 'styles/globals.css';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-montserrat',
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${montserrat.variable}`}>
      <body className="text-sans flex h-screen items-center justify-center overflow-y-scroll">
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
