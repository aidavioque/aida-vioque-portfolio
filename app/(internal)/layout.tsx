import 'styles/globals.css';
import Header from '#/components/header';
import { syne } from '../../public/fonts';
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
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${syne.variable} ${inter.variable} relative font-sans font-normal text-gray-900`}
      >
        <Header />
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
