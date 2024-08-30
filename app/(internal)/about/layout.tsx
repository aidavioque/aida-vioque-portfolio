import { Metadata } from 'next';
import Footer from '#/components/footer';

export const metadata: Metadata = {
  title: 'Aida Aranguren Portfolio - About me',
};
export default async function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      {children}
      <Footer />
    </div>
  );
}
