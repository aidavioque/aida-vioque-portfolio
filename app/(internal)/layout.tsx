import 'styles/globals.css';
import Header from 'app/components/header';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="relative scroll-smooth font-sans font-normal text-soft">
        <Header />
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
