import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://aidaaranvio.com/'),
  title: 'Aida Aranguren Portfolio',
  description: `Discover Aida Aranguren's captivating portfolio a product designer. With great attention to detail, Aida brings ideas to life through her artwork. From engaging user interfaces to illustrations, her versatile creations leave a lasting impression. Explore her portfolio now.`,
  keywords:
    'Aida Aranguren, Portfolio, designer, product designer, user interfaces',
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
        alt: 'Aida Aranguren',
      },
    ],
  },
  openGraph: {
    title: 'Aida Aranguren',
    description: 'Aida Aranguren Portfolio',
    locale: 'es_ES',
    url: 'https://aidaaranvio.com',
    images: [
      {
        url: '/images/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Aida Aranguren',
      },
    ],
  },
};
