import Link from 'next/link';

const Footer = () => (
  <footer className="text-primary fixed bottom-0 ml-8 sm:ml-0 pb-6 pt-2 w-full bg-backround">
    <div className="flex justify-center">
      <div className="container">
        <a href="mailto:aida.aranvio@gmail.com" className="hover:scale-110">
          aida.aranvio@gmail.com
        </a>
        <Link href="/">
          <a className="text-right pl-6 text-primary hover:scale-110">⬆</a>
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
