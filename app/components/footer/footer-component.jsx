'use client';

import { DialogFooter } from '@/components/ui/dialog';
import MiniFooter from 'app/components/mini-footer';
import Arrow from 'app/components/arrow';

const Footer = () => {
  return (
    <footer className="w-full bg-white/70 text-primary">
      <div id="contact">
        <DialogFooter>
          <MiniFooter />
        </DialogFooter>
      </div>
      <div className="flex justify-end">
        <div className="container absolute bottom-6 text-right">
          <Arrow bottom />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
