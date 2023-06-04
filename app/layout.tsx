import 'styles/globals.css';
import { Montserrat } from 'next/font/google';
import Header from 'app/components/header';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
  variable: '--font-montserrat',
});

const NEXT_PUBLIC_WIP = process.env.NEXT_PUBLIC_WIP === 'true';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={montserrat.variable}>
      <body className="relative font-sans text-soft">
        {!NEXT_PUBLIC_WIP && <Header />}
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
