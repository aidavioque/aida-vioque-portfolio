import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://aidaaranvio.com/'),
  title: 'Aida Aranguren Monuments of the world',
  description: 'Aida Aranguren Monuments of the world',
  keywords: 'Aida Aranguren, Monuments of the world, designer, monuments',
  // manifest: '/images/site.webmanifest',
  themeColor: '#ffffff',
  icons: [
    {
      rel: 'mask-icon',
      url: '/images/safari-pinned-tab.svg',
    },
    {
      rel: 'favicon',
      url: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/images/apple-touch-icon.png',
    },
  ],
  viewport: 'width=device-width, initial-scale=1',
  twitter: {
    card: 'summary_large_image',
    // site: '@bluescavaliers',
    // creator: '@bluescavaliers',
    images: [
      {
        url: '/images/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Monuments of the world',
      },
    ],
  },
  openGraph: {
    title: 'Monuments of the world',
    description: 'Monuments of the world by Aida Aranguren',
    locale: 'es_ES',
    url: 'https://aidaaranvio.com/infografia',
    images: [
      {
        url: '/images/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Monuments of the world',
      },
    ],
    videos: [
      {
        url: 'https://www.youtube.com/embed/Ln6ss_0vOoY',
        width: 800,
        height: 600,
      },
    ],
  },
};
