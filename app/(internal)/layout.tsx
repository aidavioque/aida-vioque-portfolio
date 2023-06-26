import 'styles/globals.css';
import { Montserrat } from 'next/font/google';
import Header from 'app/components/header';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600'],
  // display: 'swap',
  variable: '--font-montserrat',
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`relative font-sans text-soft ${montserrat.variable} scroll-smooth`}
      >
        <Header />
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
