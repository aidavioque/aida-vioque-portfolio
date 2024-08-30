import { Metadata } from 'next';
import Footer from '#/components/footer';

export const metadata: Metadata = {
  title: 'Aida Aranguren Portfolio - Project - Smart Protection',
};
export default async function AboutLayout({
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
