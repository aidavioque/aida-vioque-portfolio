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

const Inter = localFont({
  src: [
    {
      path: './Inter_18pt-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './Inter_18pt-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Inter_18pt-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Inter_18pt-Thin.ttf',
      weight: '200',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-inter',
});

export { syne, Inter };
