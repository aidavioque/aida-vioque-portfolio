import Link from 'next/link';

const Footer = () => (
  <footer className="bg-backround fixed bottom-0 ml-8 w-full pb-6 pt-2 text-primary sm:ml-0">
    <div className="flex justify-center">
      <div className="container">
        <a href="mailto:aida.aranvio@gmail.com" className="hover:scale-110">
          aida.aranvio@gmail.com
        </a>
        <Link href="/" className="pl-6 text-right text-primary hover:scale-110">
          ⬆
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
