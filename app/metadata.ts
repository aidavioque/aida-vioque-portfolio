import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://aidaaranvio.com/'),
  title: 'Aida Aranguren Portfolio',
  description: 'Aida Aranguren Portfolio',
  keywords: 'Aida Aranguren, Portfolio, designer',
  manifest: '/images/site.webmanifest',
  themeColor: '#ffffff',
  icons: [
    {
      rel: 'mask-icon',
      url: '/images/safari-pinned-tab.svg',
    },
    {
      rel: 'icon',
      sizes: '32x32',
      url: '/images/favicon-32x32.png',
    },
    {
      rel: 'icon',
      sizes: '16x16',
      url: '/images/favicon-16x16.png',
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
        alt: 'Blues Cavaliers',
      },
    ],
  },
  openGraph: {
    title: 'Blues Cavaliers',
    description: 'Una banda de blues acústico de Madrid',
    locale: 'es_ES',
    url: 'https://bluescavaliers.com',
    images: [
      {
        url: '/images/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Blues Cavaliers',
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
