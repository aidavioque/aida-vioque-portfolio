import 'styles/globals.css';
import { Montserrat } from 'next/font/google';
import Header from 'app/components/header';
import cx from 'classnames';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600'],
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
        className={cx(
          'relative scroll-smooth font-sans text-soft',
          montserrat.variable,
        )}
      >
        <Header />
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
