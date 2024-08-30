import localFont from 'next/font/local';

const syne = localFont({
  src: [
    {
      path: './Syne-Bold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Syne-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Syne-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-syne',
});

export { syne };
