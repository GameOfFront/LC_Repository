import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Artesano Brasil',
    default: 'Artesano Brasil',
  },
  description: 'Simule diferentes ladrilhos em ambientes com a Artesano Brasil.',
  keywords: 'ladrilhos, Artesano Brasil, artesano, artesano brasil, simulador de ladrilhos, design de interiores, cores, padrões',
  metadataBase: process.env.NODE_ENV === 'production' 
    ? new URL('https://artesanobrasil.com.br') 
    : new URL('http://localhost:3000'),
  openGraph: {
    title: 'Simulador de Ladrilhos Online - Artesano Brasil',
    description: 'Simule diferentes ladrilhos em ambientes com a Artesano Brasil.',
    images: ['/opengraph-image.png'],
    type: 'website',
    url: 'https://artesanobrasil.com.br/',
    locale: 'pt_BR',
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="pt-br">
      <head>
        <meta name="geo.region" content="BR-MG" /> 
        <meta name="geo.placename" content="Barbacena" /> 
        <meta name="geo.position" content="-21.2264;-43.7742" /> 
        <meta name="google-site-verification" content="R7waioaIyZSKrX8S-gHoE7luW9eJZvo_3tCFLrSj6tI" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
