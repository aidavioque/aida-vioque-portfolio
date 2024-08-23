import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aida Aranguren Portfolio - About me',
  description:
    'A science-based resource that explains the concept of natural capital and how business and society depend on it.',
};
export default async function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
