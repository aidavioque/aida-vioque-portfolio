import 'styles/globals.css';
import Header from '#/components/header';
import { syne } from '../../public/fonts';
import { Inter } from '../../public/fonts';
import Cursor from '#/components/cursor';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${syne.variable} ${Inter.variable} relative font-sans font-normal text-gray-900`}
      >
        <Header />
        <main>{children}</main>
        <Cursor />
      </body>
    </html>
  );
}
