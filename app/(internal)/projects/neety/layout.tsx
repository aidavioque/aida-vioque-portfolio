import { Metadata } from 'next';
import Footer from '#/components/footer';

export const metadata: Metadata = {
  title: 'Aida Aranguren Portfolio - Project - Neety',
};

export default function NeetyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      {children}
      <Footer theme="white" />
    </div>
  );
}
